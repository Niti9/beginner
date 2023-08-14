import Video from './video.js'
import PlayButton from './PlayButton.js'
import useVideos from '../Hooks/Videos.js';
import axios from 'axios';
import { useState } from 'react';

//creating prop in destructred way for passing App.js
//remove videos from prop because now it will come from videoContext
function VideoList({ editVideo}) {

  //using external api here
  const url = "https://my.api.mockaroo.com/coder_dost.json?key=7cb5ceb0"

  
  // videos apne aap chalegi browser mein
  // here useContext of videosContext
  // const videos = useVideos();
//or
  // to change all the videos name and data regarding that
    const [videos,setVideos] = useState([]);
  //create function to use that api 
  async function handleClick(){
    const res = await axios.get(url);
    console.log(res.data);
    setVideos(res.data);
  }


  
  
  return (
    <>
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
            editVideo={editVideo}
            // remove dispatch from here because now it comes
            // from VideoDispatchContext.js
            // dispatch = {dispatch}
          >
            <PlayButton
              onPlay={() => console.log('Playing..', video.title)}
              onPause={() => console.log('Paused..', video.title)}
            >
              {video.title}
            </PlayButton>
          </Video>)
      }
      <button onClick={handleClick}> Get Videos</button>
    </>
  )
}
export default VideoList;