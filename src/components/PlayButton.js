import './PlayButton.css'

function PlayButton({children,onPlay, onPause  }) {

    let playing = false;  
    function handleClick(e) {
        //event bubbling
        e.stopPropagation(); //isse app console mein show nahi hoga
        //multiple functionalities mein uppar waali ko hata dega
        if(playing) 
            onPause();
        else 
            onPlay();

        playing = !playing;  //condition to change false into true or play into pause in console
    }
    return (
        // play , pause sign we make ternary operator 
        <button onClick={handleClick} >{children}: {playing ? '>':'||'}</button>
    )
}


export default PlayButton;