import { useContext } from 'react';
import './video.css';
import ThemeContext from '../Context/ThemeContext';
import useVideoDispatch from '../Hooks/VideoDispatch';

//also children prop help to take "nested props"  
//remove dispatch prop 
function Video({ id, title, channel = "CODER_DOST", views, time, verified, children,editVideo}) {
const theme = useContext(ThemeContext)

//Now we use custom hooks in replacement of normal context
const dispatch = useVideoDispatch();
    return (
        <>
            <div className={`container ${theme}`}>
                {/* add button to remove any video */}
                <button
                    /* call deleteVideo and add id with it */
                    className='close' onClick={() =>  dispatch({ type: 'DELETE', payload: id })}>X
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
}

export default Video;