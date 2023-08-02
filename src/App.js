import Video from './components/video.js'
import './App.css';
function App() {

  // creating object 
  let obj = {
    title: "React Js tutorial",
    views: "999k",
    time: "1 year ago",
    channel: 'Coder Dost',
    verified: true,

  }
  return (

    <>
      <div className='App'>
        <div>Video</div>
        {/* spread operator */}
        <Video {...obj} > </Video>

        <Video title="Node Js tutorial"
          views="100k"
          time="1 month ago"
          channel='Abhishek Rathore'
          verified={true}
          
        >

        </Video>
        <Video title="MongoDB tutorial"
          views="140k"
          time="5 month ago"
          verified={false}
         >

        </Video>
      </div>
    </>
  )
}

export default App;
