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
      // video // ye humein  Addvideo.js se milega saara data 
      // but humaare pass video ki id nahi hai isliye hum yahan define karenge
      //or 
      {
        ...video,
        id: videos.length + 1
      }
      //isse humein video mein id bhi mil jaayegi puraani videos mein
       // ek length jyaada milega
    ]);

  }


  return (


    <div className='App' onClick={() => console.log('App')}>
      <AddVideo addVideos = {addVideos} ></AddVideo>
      <VideoList videos={videos}></VideoList> 
      {/* using prop for add video and get data 
      videolist.js */}

      
    </div>
  );
}

export default App;
