import './video.css';

function Video({ id,title, channel = "CODER_DOST", views, time, verified }) {

   
   

    return (
        <>
            <div className='container'>
                <div className='pic' >

                {/*Using temperal literal or backtick to use id as prop in dynamic way */}
                    <img src={`https://picsum.photos/id/${id}/5000/3333`} alt="Katherine Johnson" />
                </div>
                <div className='title'>{title}</div>
                {/* short circuiting = yahan agar value or condition false hai to wo aage check 
                hi nahi hogi aur 0 aur 1 ke case mein value alag kaam karegi*/}
                <div className='channel'>{channel} {verified && '✅'} </div>
                
                    

                <div className='views'>{views}
                    <span>.</span> {time}
                </div>
            </div>
        </>
    )
}

export default Video;