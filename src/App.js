import Video from './components/video.js'
import './App.css';
import videoDB from './data/data.js';
import PlayButton from './components/PlayButton.js'
import { useState } from 'react';
import AddVideo from './components/AddVideo.js';
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

      {/* Ye humein AddVideo.js se milega
      yahan PROP ka name aur FUNCTION ka name diya hai */}
      <AddVideo addVideos = {addVideos} ></AddVideo>
      {
        videos.map(video =>
          <Video
            key={video.id} // this is unique means to remove consol error of ' unique key  prop'
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
            id={video.id}
          >
            <PlayButton
              onPlay={() => console.log('Playing..', video.title)}
              onPause={() => console.log('Paused..', video.title)}
            >
              {video.title}
            </PlayButton>
          </Video>)
      }
    </div>
  );
}

export default App;
