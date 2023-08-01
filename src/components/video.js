import './video.css';

/* destructured way instead of props*/
// agar humne props mein default kisi chiz ko diya hai aur app.js mein value 
//dena bhul gaye to ye default value apne aap usmein show hogi
function Video({ title, channel = "CODER_DOST", views, time }) {
    return (
        <>
            <div className='container'>
                <div className='pic' > 

                    <img src="https://picsum.photos/id/3/5000/3333" alt="Katherine Johnson" />
                </div>
                <div className='title'>{title}</div>
                <div className='channel'>{channel} ✅ </div>
                <div className='views'>{views}
                    <span>.</span> {time}
                </div>
            </div>
        </>
    )
}

export default Video;