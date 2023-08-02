import './PlayButton.css'

function PlayButton() {

    function handleClick() {
        console.log('play');
    }

    return (
        //hum handleClick() nahi likhenge
        //instead hum sirf handleClick likhenge kyunki isse function definition apne aap 
        // chalegi means play two times print nahi hoga
        <button onClick={handleClick}>Play</button>
    )
}


export default PlayButton;