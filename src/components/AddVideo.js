import { useState } from 'react';
import videoDB from '../data/data.js';
import './AddVideo.css'
import video from './video.js';

function AddVideo() {
    
    const [videos, setVideos] = useState({
                time: '1 month ago',
                channel: 'Coder Dost',
                verified: true
    });

    function handleSubmit() {

    }

    function handleChange(e) {
        // view or target with the value show honge console mein
        console.log(e.target.name, e.target.value);
        setVideos({...video,
            // is square bracket se pehle javascript samjhega ki
            //name pehle evaluate hoga phir key banega aur saamne 
            //waali value banegi
           [e.target.name]: e.target.value

        })
        console.log(video);

    }



    return (
        // Adding form to add video by adding title, views
        <form>
            <input type="text" name='title' onChange={handleChange} placeholder='title' />
            <input type="text"name='views' onChange={handleChange} placeholder='views' />

            <button 
            // new onclick function
            onClick={handleSubmit}

            // onClick={() => {
                // //here we setVideos (setter) by copy of videos (using spread Operator) 
                // setVideos([...videos, {
                //     id: videos.length + 1,
                //     title: 'Demo Js Tutorial',
                //     name: '1M',

                // }
                // ]);
            // }}
            >
                Add Video </button>

        </form>
    )
}

export default AddVideo;