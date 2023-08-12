import Video from './video.js'
import PlayButton from './PlayButton.js'
import {useContext} from 'react';
import VideoContext  from '../Context/VideoContext.js';
//creating prop in destructred way for passing App.js
//remove videos from prop because now it will come from videoContext
function VideoList({ dispatch ,editVideo}) {

  // videos apne aap chalegi browser mein
  // here useContext of videosContext
  const videos = useContext(VideoContext);
  
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
    </>
  )
}
export default VideoList;