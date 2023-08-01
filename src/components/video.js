import './video.css';

{/* attributes in javascript used here as "PROPS" */}
function Video(props) {
   
    let bg = 'dark';
    return (
        <>
            <img src="https://picsum.photos/id/237/200/300" alt="Katherine Johnson" />
            
            {/* inline css  or double curly braces used for CSS */}
            <div className={bg} style={{ backgroundColor: 'red' }} >{props.title}</div>
        </>
    )
}

export default Video;