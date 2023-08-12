import './App.css';
import videoDB from './data/data.js';
import { useReducer, useState } from 'react';
import AddVideo from './components/AddVideo.js';
import VideoList from './components/VideoList';
import ThemeContext from './Context/ThemeContext.js';
import VideoContext from './Context/VideoContext';
import VideoDispatchContext from './Context/VideoDispatchContext';


function App() {

  console.log('render App');


  //define state of editable video upper so it can use
  const [editableVideo, setEditableVideo] = useState(null);

  //Here we make useState for change theme 
  const [mode, setMode] = useState('darkMode');


  function videoReducer(videos, action) {
    switch (action.type) {
      case 'ADD':
        return [
          ...videos,
          //ab ye niche video ki jagah action.payload lenge
          { ...action.payload, id: videos.length + 1 }
        ]
      case 'DELETE':
        return videos.filter(video => video.id !== action.payload)

      case 'UPDATE':
        const index = videos.findIndex(v => v.id === action.payload.id)
        const newVideos = [...videos]
        newVideos.splice(index, 1, action.payload)

        setEditableVideo(null);
        return newVideos;

      default:
        return videos // atleast 
    }
  }


  // useReducer(reducerName,initialValue)
  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  //to make edit function
  function editVideo(id) {
    const editing = videos.find(video => video.id === id)
    setEditableVideo(editing);
  }


  return (

    <ThemeContext.Provider value={mode}>
      {/* whatever was actual value created in videoContext.js
      file that will be override here by using value method */}
      {/* here videos declare as like prop */}
      <VideoContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App ${mode}`} onClick={() => console.log('App')}  >
            <button onClick={() => setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')}>Mode</button>
            <AddVideo
              // also removing dispatch which is passing as prop
              // dispatch={dispatch}
              editableVideo={editableVideo}
            >
            </AddVideo>
            <VideoList
              // also removing dispatch which is passing as prop
              // dispatch={dispatch}
              editVideo={editVideo}
            /**  so we remove this videos prop because
            now it will use by themecontext */
            //videos={videos}
            >
            </VideoList>
          </div >
        </VideoDispatchContext.Provider>
      </VideoContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
