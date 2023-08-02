import './PlayButton.css'

export default function PlayButton () {
    // EVENT HANDLER FUNCTION 
    // iss function se console mein play ek hi baar print hoga jab click karenge
    return <button onClick={()=>console.log('play')}>Play</button>
}