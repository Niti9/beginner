import Video from './components/video.js'
import './App.css';
import videos from './data/data.js';

function App() {

  return (


    <div className='App'>
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
          ></Video>)
      }
    </div>
  );
}

export default App;
