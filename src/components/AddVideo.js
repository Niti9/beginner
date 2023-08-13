import { useEffect, useState, useRef } from 'react';
import './AddVideo.css'
import useVideoDispatch from '../Hooks/VideoDispatch';

const initialState = {
    time: '1 month ago',
    channel: 'Coder Dost',
    verified: true,
    title: '',
    views: '',
}

// taking dispatch as prop
function AddVideo({ editableVideo }) {

    const [video, setVideos] = useState({ initialState });

    //Now here we use custom hook in replace of the dispatch
    // const dispatch = useContext(VideoDispatchContext);
    //Here we use that function of custom hook
    const dispatch = useVideoDispatch();

    //useRef
    const inputRef = useRef(null);

    function handleSubmit(e) {
        //is se form ya phir page reload nahi hoga
        e.preventDefault();

        if (editableVideo) {
            dispatch({ type: 'UPDATE', payload: video })
        }
        // to add new video
        else {
            dispatch({ type: 'ADD', payload: video })
        }
        setVideos(initialState);
    }

    function handleChange(e) {

        setVideos({
            ...video,
            [e.target.name]: e.target.value
        })

    }


    useEffect(() => {
        //to remove null aur agar kuch value hogi tabhi setVideo mein set hoga
        if (editableVideo) {
            setVideos(editableVideo);
        }

        // // useRef withd DOM
        // inputRef.current.value = "demo";
        // //isse title waale box mein demo apne aap put ho jaayega

        //or 

        // inputRef.current.focus();
        //isse title waale apne aap cursor chala jaayega

        //or 
        inputRef.current.placeholder = ""
        //inputRef.current.focus()
        "type here title".split('').forEach((char,i)=>{
            setTimeout(()=>{
                inputRef.current.placeholder = inputRef.current.placeholder + char;
            },1000 * i);
        })
        //isse title waale box mein animation hoga 

    }, [editableVideo])

    return (
        // Adding form to add video by adding title, views
        <form>
            <input
                //ref is a predefined prop  name will never change same
                //which help to use by current of inputRef
                ref={inputRef}
                type="text"
                name='title'
                onChange={handleChange}
                placeholder='title'
                value={video.title} />

            <input type="text"
                name='views'
                onChange={handleChange}
                placeholder='views'
                value={video.views} />

            <button onClick={handleSubmit} >
                {editableVideo ? 'Edit' : 'Add'} Video
            </button>

        </form>
    )
}

export default AddVideo;