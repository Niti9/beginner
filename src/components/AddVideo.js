import { useEffect, useState } from 'react';
import './AddVideo.css'

/** creating variable isse jab hum new video add karenge
 * to jo title aur views add karne waale column hai wo khaali 
 * ho jaayenge kyunki useState(initialState) mein chala jaayega*/
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

        // to update video or replace content of stored video
        if (editableVideo) {
            // updateVideo(video); // PROP name aur video ka data pass karenge app.js mein
            //or using reducer
            dispatch({ type: 'UPDATE', payload: video })
        }
        // to add new video
        else {
            // addVideos(video);
            //or 
            //using reducer
            dispatch({ type: 'ADD', payload: video })
        }
        setVideos(initialState);
    }

    function handleChange(e) {

        //Yahan setVideos mein spread operator waala video 
        //use state mein jo data diya hai usse waise hi lega
        // aur title aur views change honge bas lekin
        setVideos({
            ...video,
            // is square bracket se pehle javascript samjhega ki
            //name pehle evaluate hoga phir key banega aur saamne 
            //waali value banegi
            [e.target.name]: e.target.value
        })

    }

    /** useEffect use when we want to 
     * mount or Render component first time
     * yahan [] array dena jaruri hai warna ye infinite chalta rahega
     [] ismein dependency array dena padta hai
    */
    useEffect(() => {
        //to remove null aur agar kuch value hogi tabhi setVideo mein set hoga
        if (editableVideo) {
            setVideos(editableVideo);
        }
    }, [editableVideo])
    /** jab editable video mei change hoga tab useEffect chalega*/


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
                {/* ab kaam kar rha hai lekin uncontolled 
                input to be controlled error console mei show ho rha hai  */}
                {/* hum button ka name change karenge
            j   ab editableVideo null rahega tab Add show hoga 
                warna Edit */}
                {editableVideo ? 'Edit' : 'Add'} Video
            </button>

        </form>
    )
}

export default AddVideo;