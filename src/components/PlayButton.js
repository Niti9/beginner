import './PlayButton.css'
import { useState } from 'react';

function PlayButton({children,onPlay, onPause  }) {

    console.log('render PlayCounter to check re-rendering')
    const[playing, setPlaying] =  useState(false);  
    function handleClick(e) {

        //event bubbling
        e.stopPropagation(); //isse app likh kar console mein show nahi hoga 
        if(playing) 
            onPause();
        else 
            onPlay();

        setPlaying(!playing);  //condition to change false into true or play into pause in console
    }
    return (
        // play , pause sign we make ternary operator 
        <button onClick={handleClick} >{children}: {playing ? '⏸️':'▶️'}</button>
    )
}


export default PlayButton;