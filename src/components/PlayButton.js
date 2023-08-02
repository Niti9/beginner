import './PlayButton.css'

//using children prop it help to take message or icon name passing as prop
function PlayButton({message,children,onClick}) {

    function handleClick() {
        onClick();
    }

    return (
        <button onClick={handleClick}>{children}</button>
    )
}


export default PlayButton;