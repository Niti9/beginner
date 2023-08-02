import './PlayButton.css'

//using children prop it help to take message or icon name passing as prop
//also children prop help to take "nested props"  
function PlayButton({message,children,onPlay, onPause , }) {

    //Don't use this approach
    let playing = false;  
    //synthetic base event 
    function handleClick(e) {
        console.log(e)
        //event bubbling
        e.stopPropagation(); //isse app console mein show nahi hoga
        //multiple functionalities mein uppar waali ko hata dega

        // e.preventDefault(); //generally form mein use hota hai 
        // //jaise form mein submit ko rok sakta hai //to stop default behavior

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