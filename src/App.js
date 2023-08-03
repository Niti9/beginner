import Video from './components/video.js'
import './App.css';
import videos from './data/data.js';
import PlayButton from './components/PlayButton.js'
import Counter from './components/Couter.js'
function App() {

  return (


    <div className='App' onClick={()=>console.log('App')}>
      <div>Video</div>
      {
        //Higher order function
        // videos hai collection or object name 
        //map hoga aur video ek iterator ka kaam karega 
        //means ek ek karke object ke har ek title,views wagarh run honge
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
              onPlay={() => console.log('Playing..',video.title)}
              onPause={() => console.log('Paused..',video.title)}
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
