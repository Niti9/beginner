import Video from './components/video.js'
import './App.css';
function App() {

  // creating object 
  let videos = [{
    
    title: "React Js tutorial",
    views: "999k",
    time: "1 year ago",
    channel: 'Coder Dost',
    verified: true,
    id:1,

  },
  {
    title: "Node Js tutorial",
    views: "100k",
    time: "1 month ago",
    channel: 'Abhishek Rathore',
    verified: false,
    id:2,
  },
  {
    title: "MongoDB tutorial",
    views: "140k",
    time: "5 month ago",
    verified: true,
    id:3,

  }]

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
