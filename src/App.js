import './App.css';
import videoDB from './data/data.js';
import { createContext, useContext, useReducer, useState } from 'react';
import AddVideo from './components/AddVideo.js';
import VideoList from './components/VideoList';
import ThemeContext from './Context/ThemeContext.js';


function App() {

  console.log('render App');


  //define state of editable video upper so it can use
  const [editableVideo, setEditableVideo] = useState(null);

  //Here we make useState for change theme 
  const [mode, setMode] = useState('darkMode');















  /**useReducer ki help se hum 
   * add video function run kar lenge 
   * by using dispatch aur setVideos 
   * remove kiya hai isliye use juda 
   * sab kuch comment karenge warna error
   *  show hota rahega
*/

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

        /** abhi agar hum kisi video ko update karenge 
         * to wo normally update ho jaayega lekin
         * jo add video button edit video mein change hua 
         * hai usse agar khaali rehte hue click karenge 
         * to agle video ki details empty ho jaayegi 
         * aur agar title aur video apni marzi se denge tab
         * bhi aakhri video ki details hi change hogi
         * 
         * humein waapas editable video ki state change karni hogi 
         * taaki wo edit video karne ke baad automatically add 
         * video button functionallity show kare
         */
        setEditableVideo(null);
        return newVideos;

      default:
        return videos // atleast 
    }
  }


  /** Now we will use useReducer
   * format will be below
   */
  // useReducer(reducerName,initialValue)
  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  // const theme = useContext(ThemeContext);
  // console.log({ ThemeContext })



  //to make edit function
  function editVideo(id) {
    const editing = videos.find(video => video.id === id)
    setEditableVideo(editing);
  }


  return (
    /** we can set boundary of context means the only part where 
     * we will use useContext by the help of Provider 
     * Here value can be change , so we will use useState 
     * to change mode from dark to light
    */

    <ThemeContext.Provider value={mode}>

      {/* now we remove theme and replace it by mode to prevent 
     or  remove css conflict*/}
      <div className={`App ${mode}`} onClick={() => console.log('App')}  >

        {/* create button to change Mode  or background color 
       from dark to light and vice versa*/}
        <button onClick={() => setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')}>Mode</button>

        {/* remove extra unwanted props
       and use only dispatch keyword as prop
       and write or use their functionalities
        in different file */}
        {/* yahan par bhi addVideo and updateVideo prop hat gaya */}
        <AddVideo
          dispatch={dispatch}
          editableVideo={editableVideo}
        >
        </AddVideo>
        <VideoList dispatch={dispatch} editVideo={editVideo} videos={videos}></VideoList>
        {/* using prop for add video and get data 
      videolist.js */}

      </div >
    </ThemeContext.Provider>
  );
}

export default App;
