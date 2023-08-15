import Video from './video.js'
import PlayButton from './PlayButton.js'
import useVideos from '../Hooks/Videos.js';
import axios from 'axios';
import { useCallback, useEffect } from 'react';
import useVideoDispatch from '../Hooks/VideoDispatch.js';

//creating prop in destructred way for passing App.js
//remove videos from prop because now it will come from videoContext
function VideoList({ editVideo }) {

  //using external api here
  const url = "https://my.api.mockaroo.com/coder_Dost_Final_Api.json?key=7cb5ceb0"


  //useState ki jagah hum dispatch or reducer use karenge
  const dispatch = useVideoDispatch();

  // videos apne aap chalegi browser mein
  // here useContext of videosContext
  const videos = useVideos();


  useEffect(() => {
    // best way to use that api 
    //here inside useEffect
    //ab jab browser par load hoga to ye function 
    //getVideos() apne aap first reload hoga 
    //aur dispatch ko humne as dependency diya hai 
    async function getVideos() {
      const res = await axios.get(url);
      console.log(res.data);
      dispatch({ type: 'LOAD', payload: res.data });
    }
    getVideos();

  }, [dispatch])



  /** Now we will use Hook with memo 
  memo is used in PlayButton.js and we use useCallback
  hook to store or memoized onPlay and onPause function */
  //
  //Hooks are always use at top level mainly outside the return()
  // this is useCallback hook
  const play = useCallback(() => console.log('Playing..'), [])
  const pause = useCallback(() => console.log('Paused..'), [])

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
          >

            <PlayButton
              onPlay={play}
              onPause={pause}
            >
              {video.title}
            </PlayButton>
          </Video>)
      }
      {/* <button onClick={handleClick}> Get Videos</button> */}
    </>
  )
}
export default VideoList;