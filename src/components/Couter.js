import {useState} from 'react';

function Counter(){

    //number is state , and setNumber is like setter 
    const [number, setNumber] = useState(0);

    function handleClick(e){
        e.stopPropagation();
        
        setNumber(number+1);
        console.log(number);
    }
    return(
        <>
        <h1 style={{color:'white'}}>{number}</h1>
        <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter;