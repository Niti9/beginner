import { useState } from 'react';
import './AddVideo.css'

function AddVideo({ addVideos }) {


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


    
    const [video, setVideos] = useState({initialState});

    function handleSubmit(e) {
        //is se form ya phir page reload nahi hoga
        e.preventDefault();
        addVideos(video); // PROP name aur video ka data pass karenge app.js mein
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



    return (
        // Adding form to add video by adding title, views
        <form>
            <input type="text"
                name='title'
                onChange={handleChange}
                placeholder='title' />

            <input type="text"
                name='views'
                onChange={handleChange}
                placeholder='views' />

            <button onClick={handleSubmit} > Add Video </button>

        </form>
    )
}

export default AddVideo;