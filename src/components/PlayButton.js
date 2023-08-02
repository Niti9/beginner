import './PlayButton.css'

//using children prop it help to take message or icon name passing as prop
function PlayButton({message,children,onPlay, onPause}) {

    //Don't use this approach
    let playing = false;  
    function handleClick() {
        if(playing) 
            onPause();
        else 
            onPlay();

        playing = !playing;  //condition to change false into true or play into pause in console
    }

    return (
        <button onClick={handleClick}>{children}</button>
    )
}


export default PlayButton;