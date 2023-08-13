import { useState, useRef } from 'react';

function Counter() {

    console.log("render counter");
    //number is state , and setNumber is like setter 
    const [number, setNumber] = useState(0);

    //Ref is always an object that's 
    //why that value will store in current property of num 
    //Reference will never re-render but useState always re-render  the function
    let num = useRef(0);

    function handleClick(e) {
        e.stopPropagation();

        setNumber(number + 1);
        //current is the property of ref which shows
        // the current  stored value
        num.current++;
        console.log(num.current); // ab  add par click karne
        //se value 1 2 3 ...  karke badhegi 

    }
    return (
        <>
            <h1 style={{ color: 'white' }}>{number}</h1>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter;