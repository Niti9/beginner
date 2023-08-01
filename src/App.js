import Video from './components/video.js'
import './App.css';
function App() {
  return (

    <>
      <div className='App'>
        <div>Video</div>
        <Video title="React Js tutorial"
          views="10k"
          time="1 year ago">
        </Video>
        <Video title="Node Js tutorial"
          views="100k"
          time="1 month ago">
        </Video>
        <Video title="MongoDB tutorial"
          views="140k"
          time="5 month ago">
        </Video>
      </div>
    </>
  )
}

export default App;
