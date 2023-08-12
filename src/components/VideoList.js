import Video from './video.js'
import PlayButton from './PlayButton.js'

//creating prop in destructred way for passing App.js
function VideoList({ videos, dispatch ,editVideo}) {
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
            dispatch = {dispatch}
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