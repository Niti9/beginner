import { useState } from 'react';
import './AddVideo.css'

function AddVideo({addVideos}) {

    const [video, setVideos] = useState({
        time: '1 month ago',
        channel: 'Coder Dost',
        verified: true,
    });

    function handleSubmit(e) {
        //is se form ya phir page reload nahi hoga
        e.preventDefault();
        addVideos(video); // PROP name aur video ka data pass karenge app.js mein
        console.log(video);
        //ab show hoga ki video ke data mein title aur views add hua hai ya nahi
        //waise add to ho gayi hai details

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