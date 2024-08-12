import { useState, useEffect } from "react";

export default function Timer() {
    console.log("ee Timer ane component every 1 sec ki run autundi");
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //         // count increment ayina prati saari ee Timer() component malli render autundi
    //         setCount((count) => count + 1);
    //     }, 1000);
    // });

    // 2nd param ===> empty array ====> runs only on first render
    useEffect(() => {
        setTimeout(() => {
            // count increment ayina prati saari ee Timer() component malli render autundi
            setCount((count) => count + 1);
        }, 1000);
    }, []);

    return <h1>I've rendered {count} times!</h1>;
}