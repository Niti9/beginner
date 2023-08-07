import './App.css';
import videoDB from './data/data.js';
import { useState } from 'react';
import AddVideo from './components/AddVideo.js';
import VideoList from './components/VideoList';
function App() {

  console.log('render App');
  const [videos, setVideos] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null);


  //to get data from AddVideo.js with parameter video
  function addVideos(video) {
    setVideos([
      ...videos,
      { ...video, id: videos.length + 1 }
    ]);

  }
  //to make delete video function
  function deleteVideo(id) {
    setVideos(videos.filter(video => video.id !== id))
  }
  //to make edit function
  function editVideo(id) {
    const editing = videos.find(video => video.id === id)
    setEditableVideo(editing);
  }
  //to make update video function
  function updateVideo(video) {
    /**now we use splice to update video 
    iska format hoga (index jo change karni hai , 1 element, video )
    ye splice original state ko change karta hai isliye hum spread operator 
    ki help se copy banakar usmein change karenge*/
    const index = videos.findIndex(v=>v.id===video.id) //agar variable v ki id 
    // click karne par kisi video se match hogi to uska index humein mil jaayega
    const newVideos = [...videos]
    newVideos.splice(index,1,video)
    
    setVideos(newVideos);
  }


  return (


    <div className='App' onClick={() => console.log('App')}>
      <AddVideo
        addVideos={addVideos}
        editableVideo={editableVideo}
        updateVideo={updateVideo} >
      </AddVideo>
      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
      {/* using prop for add video and get data 
      videolist.js */}


    </div>
  );
}

export default App;
