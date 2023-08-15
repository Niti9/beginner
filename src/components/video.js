import { useContext, useEffect, memo } from 'react';
import './video.css';
import ThemeContext from '../Context/ThemeContext';
import useVideoDispatch from '../Hooks/VideoDispatch';

//video function bhi baar baar re-render ho rha hai 
//isliye hum isse bhi memo mein memoized karenge

const Video = memo( function Video({ id, title, channel = "CODER_DOST", views, time, verified, children, editVideo }) {
    
    //to check rendering of videos
    console.log('render Video',id);
    const theme = useContext(ThemeContext)

    //Now we use custom hooks in replacement of normal context
    const dispatch = useVideoDispatch();


  /**   //useEffect ki wajah se videos ki id 2 times show ho rhi hai 
    //jo ki sahi nahi hai react mein Dom ko react jyaada control 
    //nahi kar sakta isliye humein hi kuch logic use karna hoga
    //  aur hum jab bhi koi video remove karte hai to uski id 
    // cache ya storage mein reh jaati hai jisko hatana jaruri hai 
    //warna browser crash ho sakta hai 
   */
    // useEffect(() => {
    //     const idx = setInterval(()=>{
    //         console.log('video Playing', id)
    //     },3000)

    //     //iss way se hum 2 times repeat hone ko bhi remove kar denge
    //     //aur video ko remove karne ke baad uski id bhi remove ho jaayegi 
    //     return ()=>{
    //         clearInterval(idx)
    //     }
    // },[id]) //dependency array hai id 
    // //agar id change hua to useEffect dobara chal jaayega

    return (
        <>
            <div className={`container ${theme}`}>
                {/* add button to remove any video */}
                <button
                    /* call deleteVideo and add id with it */
                    className='close' onClick={() => dispatch({ type: 'DELETE', payload: id })}>X
                </button>
                <button
                    /* call editVideo and add id with it */
                    className='edit' onClick={() => editVideo(id)}>Edit
                </button>
                <div className='pic' >
                    {/*Using temperal literal or backtick to use id as prop in dynamic way */}
                    <img src={`https://picsum.photos/id/${id}/5000/3333`} alt="Katherine Johnson" />
                </div>
                <div className='title'>{title}</div>
                <div className='channel'>{channel} {verified && '✅'} </div>
                <div className='views'>{views}
                    <span>.</span> {time}
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
})

export default Video;