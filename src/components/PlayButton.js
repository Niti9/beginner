import ThemeContext from '../Context/ThemeContext';
import './PlayButton.css'
import { useContext, useState, memo } from 'react';

/**memo used to memoized the component
 * but whenever we use memo  mostly we have to used 
 * useCallback or useMemo Hook with memo
  */ 
const PlayButton = memo(function PlayButton({ children, onPlay, onPause }) {

    const theme = useContext(ThemeContext)
    const [playing, setPlaying] = useState(false);
    
    // to check the playbutton is working or not
    // console.log('playbutton')

    function handleClick(e) {
        e.stopPropagation(); //isse app likh kar console mein show nahi hoga 
        if (playing)
            onPause();
        else
            onPlay();
        setPlaying(!playing);  //condition to change false into true or play into pause in console
    }
    return (
        <button className={theme} onClick={handleClick} >{children}: {playing ? '⏸️' : '▶️'}</button>
    )
});

export default PlayButton;