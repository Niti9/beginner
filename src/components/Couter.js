import { useState, useRef, useMemo, useCallback } from 'react';



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

    /** agar hum fib function ko iss component ke andar 
     * rakhenge to humein niche useMemo mein [number] ke saath 
     * [fib] ko bhi dependency ki tarah dena hoga 
     * lekin fir "fib" function dobara call hoga aur
     * javascript mein same object name ke function bhi
     *  alag reference  lete hai 
     * //phir niche memo ko faayda hi nahi hoga 
     * //isliye hum ab "fib" function ko "memoized" kar lenge by 
     * the help of **useCallback function **
     * useMemo mein number ki return value memoized hoti hai
     */
     
    /** useCallback use to  memoized the function not return value  */

    //iss function mein bahar se koi bhi react ke through reactive chiz nahi 
    //aa rhi hai isliye koi dependency nahi chahiye
    //iss Hook ki ye speciality hai ki ye iss function ka 
    //global declare kiya hua reference uthayenge 
    //dobaara function ko re-declare nahi hone denge
   const fibFx =  useCallback(function fib(n) {
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
    
    },[])


    /** useMemo memoized the return value of function  */
    //creating a useMemo which will help to load and maintain all
    //videos edit and delete functionalites
    //as like stored value and only reload when number dependency 
    //or number will change 
    const fibMemoized = useMemo(() =>
        fibFx(number)  //memoized the function // useCallback function used here
        , [number,fibFx] //and also make it dependency
    )
    //jab hum useState mein koi nayi aur badi value denge 
    //to useMemo nayi value ko calculate karege usmein time lega 
    //lekin next time usse store karke bhot fast show kar dega
 

    return (
        <>
            {/* 2nd method useState mein value dedo jaldi 
        browser par koi bhi badi value access ho jaayegi 
        aur agar hum niche {fib(20)}  karke  badi value 
        bhejenge to processor delay hoga means bhot time 
        lagega output show hone mein */}
            <h1 style={{ color: 'white' }}>{number} | {fibMemoized} </h1>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter;