import './video.css';
function Video() {
    let topic = "React Js";
    let bg = 'dark';
    return (
        <>
            <img src="https://picsum.photos/id/237/200/300" alt="Katherine Johnson" />
            
            {/* inline css  */}
            <div className={bg} style={{ backgroundColor: 'red' }} >{topic}</div>
        </>
    )
}

export default Video;