import ThemeContext from '../Context/ThemeContext';
import './PlayButton.css'
import { useContext, useState } from 'react';

function PlayButton({ children, onPlay, onPause }) {

    //importing theme and using useContext
    const theme = useContext(ThemeContext)

    const [playing, setPlaying] = useState(false);
    function handleClick(e) {

        //event bubbling
        e.stopPropagation(); //isse app likh kar console mein show nahi hoga 
        if (playing)
            onPause();
        else
            onPlay();

        setPlaying(!playing);  //condition to change false into true or play into pause in console
    }
    return (
        // play , pause sign we make ternary operator 
        <button className={theme} onClick={handleClick} >{children}: {playing ? '⏸️' : '▶️'}</button>
    )
}


export default PlayButton;