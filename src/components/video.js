import './video.css';

{/* destructured way instead of props*/}
function Video({title,bgColor}) {
   
    let bg = 'dark';
    return (
        <>
            <img src="https://picsum.photos/id/237/200/300" alt="Katherine Johnson" />
            
            {/* inline css  or double curly braces used for CSS */}
            <div className={bg} style={{ backgroundColor:bgColor}} >{title}</div>
        </>
    )
}

export default Video;