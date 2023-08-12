import { useEffect, useState } from 'react';
import './AddVideo.css'

const initialState = {
    time: '1 month ago',
    channel: 'Coder Dost',
    verified: true,
    title: '',
    views: '',
}

// taking dispatch as prop
function AddVideo({ dispatch,addVideos,updateVideo, editableVideo }) {

    const [video, setVideos] = useState({ initialState });

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
    }, [editableVideo])

    return (
        // Adding form to add video by adding title, views
        <form>
            <input type="text"
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