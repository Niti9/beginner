import './App.css';
import videoDB from './data/data.js';
import { useState } from 'react';
import AddVideo from './components/AddVideo.js';
import VideoList from './components/VideoList';
function App() {

  console.log('render App');
  const [videos, setVideos] = useState(videoDB);


  //to get data from AddVideo.js with parameter video
  function addVideos(video) {
    setVideos([
      ...videos,
      { ...video, id: videos.length + 1 }
    ]);

  }
  //to make delete video function
  function deleteVideo(id) {
    setVideos(
    //high order function by filter method
    //isse filter ho jaayega data means ab copy change hogi na ki original state
    // => is a iterator yahan jis bhi video.id match nahi hogi 
    //wo save ho jaayega baaki delete ho jaayenge means humaari click ki
    //hui video hi delete hogi
    videos.filter(video=>video.id!==id)
    )
    // we check that function is working  and in console we see the id of video by click the cross button
    console.log(id)
  }


  return (


    <div className='App' onClick={() => console.log('App')}>
      <AddVideo addVideos={addVideos} ></AddVideo>
      <VideoList deleteVideo={deleteVideo} videos={videos}></VideoList>
      {/* using prop for add video and get data 
      videolist.js */}


    </div>
  );
}

export default App;
