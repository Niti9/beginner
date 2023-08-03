import Video from './components/video.js'
import './App.css';
import videoDB from './data/data.js';
import PlayButton from './components/PlayButton.js'
import Counter from './components/Couter.js'
import { useState } from 'react';
function App() {

  console.log('render App');
  const [videos, setVideos] = useState(videoDB);

  return (


    <div className='App' onClick={() => console.log('App')}>
      <div>
        <button onClick={() => { 
          //here we setVideos (setter) by copy of videos (using spread Operator) 
          setVideos([...videos, {
            id: videos.length + 1,
            title: 'Demo Js Tutorial',
            name: '1M',
            time: '1 month ago',
            channel: 'Coder Dost',
            verified: true
          }]);
        }}> Add Video </button>
      </div>

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
      <Counter></Counter>

      <div style={{ clear: 'both' }} >
      </div>
    </div>
  );
}

export default App;
