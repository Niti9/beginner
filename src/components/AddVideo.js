import { useState } from 'react';
import './AddVideo.css'

function AddVideo({ addVideos }) {

    /**  yahan title aur views uncontrolled 
     * means undefined rahenge jab tak
     *  hum unhe controlled nahi kar lenge
     *  uske liye hum title aur views mein '  ' space dekar 
     * unhe null karenge */
    const [video, setVideos] = useState({
        time: '1 month ago',
        channel: 'Coder Dost',
        verified: true,
        title: '',
        views: '',
    });

    function handleSubmit(e) {
        //is se form ya phir page reload nahi hoga
        e.preventDefault();
        addVideos(video); // PROP name aur video ka data pass karenge app.js mein

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