import './PlayButton.css'

//using children prop it help to take message or icon name passing as prop
function PlayButton({message,children}) {

    function handleClick() {
        console.log(message); //message prop
    }

    return (
        <button onClick={handleClick}>{children}</button>
    )
}


export default PlayButton;