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

    // useEffect(() => {
    //     setTimeout(() => {
    //         // count increment ayina prati saari ee Timer() component malli render autundi
    //         setCount((count) => count + 1);
    //     }, 3000);
    // });

    // 2nd param ===> empty array ====> runs only on first render
    useEffect(() => {
        setTimeout(() => {
            // count increment ayina prati saari ee Timer() component malli render autundi
            setCount((count) => count + 1);
        }, 3000);
    }, []);

    return <h1>I've rendered {count} times!</h1>;
}