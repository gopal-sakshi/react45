import { useState, useEffect } from "react";

export default function Counter() {
    console.log("counter ane comp, malli render ayindi");
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);


    // To clear timeout ---> this is the SYNTAXXXX
    // useEffect(() => {
    //     let timer = setTimeout(() => {
    //         setCount((count) => count + 1);
    //     }, 1000)
    //     return () => clearTimeout(timer)
    // }, []);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    );
}