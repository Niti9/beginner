import './video.css';

{/* destructured way instead of props*/ }
function Video({ title, channel, views, time }) {
    return (
        <>
            <div className='container'>
                <div className='pic'>
                    <img src="https://picsum.photos/id/237/200/300" alt="Katherine Johnson" />
                </div>
                <div className='title'>{title}</div>
                <div className='channel'>{channel} </div>
                <div className='views'>{views}
                    <span>.</span> {time}
                </div>
            </div>
        </>
    )
}

export default Video;