import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Timer() {
    console.log("Timer mall puttindi ", new Date().toISOString())
    const [count11, setCount12] = useState(0);

    useEffect(() => {
        // ee component malli re-render ayina, useEffect lo unna code okka saari maatrame run autundi
        setTimeout(() => {
            setCount12((count11) => count11 + 1);
        }, 4000);
    }, []); // <- add empty brackets here

    return (
        <>
            <h1>idi w3 example lo === rendered {count11} times!</h1>
            <button onClick = { () => setCount12(Date.now()) } >render_again</button>
        </>
        
    );
}
