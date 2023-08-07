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
    setVideos(videos.filter(video=>video.id!==id))
  }
  //to make edit function
  function editVideo(id) {
    const editing = videos.find(video=>video.id===id)
    setEditableVideo(editing);
  }


  return (


    <div className='App' onClick={() => console.log('App')}>
      <AddVideo addVideos={addVideos} editableVideo={editableVideo} ></AddVideo>
      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
      {/* using prop for add video and get data 
      videolist.js */}


    </div>
  );
}

export default App;
