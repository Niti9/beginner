import Video from './video.js'
import PlayButton from './PlayButton.js'
import useVideos from '../Hooks/Videos.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useVideoDispatch from '../Hooks/VideoDispatch.js';

//creating prop in destructred way for passing App.js
//remove videos from prop because now it will come from videoContext
function VideoList({ editVideo }) {

  //using external api here
  const url = "https://my.api.mockaroo.com/coder_dost.json?key=7cb5ceb0"


  //useState ki jagah hum dispatch or reducer use karenge
  const dispatch = useVideoDispatch();

  // videos apne aap chalegi browser mein
  // here useContext of videosContext
  const videos = useVideos();
  //or
  // to change all the videos name and data regarding that

  // useState mein videos name se hai lekin wo ek 
  // copy bana rhe hai videos ki jiski wajah se 
  // videos delete aur edit nahi ho paa rhe hai 
  // isliye humein useState use nahi karna chahiye
  // const [videos, setVideos] = useState([]);
 
  //create function to use that api 
  async function handleClick() {
    const res = await axios.get(url);
    console.log(res.data);

    //ab ya to hum har ek video ke liye bhot saare
    //dispatch as prop banakar use karein 
    //lekin hum ek naya dispatch banayenge sab videos 
    //ke liye  aur app.js mein naya case banayenge
    dispatch({type:'LOAD', payload:res.data});
    //aur hum ab kisi bhi video ko edit aur delete kar sakte hai
  }

  /**browser mein videos ki jagah  API ko 
   *  use kar rhe hai lekin abhi videos 
   * delete nahi ho rhi hai aur bhi kuch 
   * functionalities ko sahi karenge 
   */
  //lekin ab useEffect ki help se videos load karenge 
  //aur Get Videos button ki jarurat nahi padegi
  //ye apne aap first time reload hone par kaam karega
  useEffect(() => {
    handleClick();
  }, [])


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