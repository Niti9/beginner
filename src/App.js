import Video from './components/video.js'
import './App.css';
import videoDB from './data/data.js';
import PlayButton from './components/PlayButton.js'
import { useState } from 'react';
import AddVideo from './components/AddVideo.js';
function App() {

  console.log('render App');
  const [videos, setVideos] = useState(videoDB);

  return (


    <div className='App' onClick={() => console.log('App')}>
      <AddVideo></AddVideo>
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
