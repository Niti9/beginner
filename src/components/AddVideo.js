import { useState } from 'react';
import './AddVideo.css'
import video from './video.js';

function AddVideo() {

    const [video, setVideos] = useState({
        time: '1 month ago',
        channel: 'Coder Dost',
        verified: true
    });

    function handleSubmit() {

    }

    function handleChange(e) {
        // view or target with the value show honge console mein
        console.log(e.target.name, e.target.value); // output: title : "titleName"

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
        // console.log(videos) karne par data next render mein dikhta rahega
        //jaise agar title:"abc" likha hai to title le lega input pura 
        //lekin record aur compelete data ke saath sirf title:"ab" hi show hoga
        console.log(video);

    }



    return (
        // Adding form to add video by adding title, views
        <form>
            <input type="text"
                name='title'
                onChange={handleChange}
                placeholder='title' 
                /> {video.title} 
                {/*video.title se ye correct data dikhayega jaise abc diya hai to abc hi show hoga  */}

            <input type="text" name='views' onChange={handleChange} placeholder='views' />{video.views}

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