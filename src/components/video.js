import './video.css';

function Video({ title, channel = "CODER_DOST", views, time,verified }) {

    let channelJsx;
    if(verified){
        channelJsx = <div className='channel'>{channel} ✅ </div>
    }
    else{
        channelJsx = <div className='channel'>{channel} </div>
    }

    
    return (
        <>
            <div className='container'>
                <div className='pic' > 

                    <img src="https://picsum.photos/id/3/5000/3333" alt="Katherine Johnson" />
                </div>
                <div className='title'>{title}</div>

                {/* calling to variable  */}
                {channelJsx} 
                <div className='views'>{views}
                    <span>.</span> {time}
                </div>
            </div>
        </>
    )
}

export default Video;