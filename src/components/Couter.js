import { useState, useRef } from 'react';

function Counter() {

    console.log("render counter");
    //number is state , and setNumber is like setter 
    const [number, setNumber] = useState(40);

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
    //creating fib function for fibonacci series
    function fib(n) {
        /**  logic last two number add hote rahenge
         * values =  1,1,2,3,5,8,13,21,34....144,233 ......
         *  means 0+1 = 1
         * 1+1 = 2
         * 2+1=3
         * 3+2=5
        */

        if (n === 1 || n === 2) {
            return 1
        }
       
       return fib(n - 1) + fib(n - 2)

       
        
    }

    return (
        <>
        {/* 2nd method useState mein value dedo jaldi 
        browser par koi bhi badi value access ho jaayegi 
        aur agar hum niche {fib(20)}  karke  badi value 
        bhejenge to processor delay hoga means bhot time 
        lagega output show hone mein */}
            <h1 style={{ color: 'white' }}>{number} | {fib(number)} </h1>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter;