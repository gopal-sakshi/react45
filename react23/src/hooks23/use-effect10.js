import { useState, useEffect } from "react";

/*
    useEffect
    - perform side effects -- fetching data, directly update DOM, timers
    - useEffect runs after each render, unless you include the dependency array. 
    - If the array is empty, it only runs after the first render.
    - if stuff changes "Timer" component re-renders ---> but code inside useEffect will not get executed again
*/

export default function Timer() {
    console.log(`ee Timer ane component every 1 sec ki run autundi__${new Date().toISOString()} `);
    const [count, setCount] = useState(0);
    const [dep1, setDep1] = useState('dependency23');
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1);     // ##expl23
    //     }, 3000);
    // });

    // 2nd param ===> empty array ====> runs only on first render
    useEffect(() => {
        setTimeout(() => {
            // count increment ayina prati saari ee Timer() component malli render autundi
            setCount((count) => count + 1);
        }, 3000);
    }, [dep1]);

    return (
        <>
            <h1>I've rendered {count} times!</h1>;
            <button onClick={() => setDep1(new Date().toString())}>Change dependency</button>
        </>
    )
}

/*
    ##expl23
    - oka 3 seconds taruvaata, we call setCount() and count value ni okati penchaamu
    - setCount call chesaamu kabatti, ee component malli render autundi
    - malli useEffect() trigger autundi... malli useEffect lo unna setTimeout() call autundi
    - so, ala re-render ayina prati saari, useEffect trigger autaane untundi
    - useEffect lopala unna code, malli malli execute autundi...
    - so, add dependency array --> apudu, useEffect malli malli execute avvadu on every re-render
*/