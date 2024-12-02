// If we tried to count how many times our application renders using the useState Hook, 
// we would be caught in an infinite loop since this Hook itself causes a re-render.

/*
    useRef
    - useState is designed to store state that causes re-renders when updated
    - useRef is designed to store "mutable values" that persist across renders without causing a re-render
    - access DOM elements; storing previousState

*/
import { useState, useEffect, useRef } from "react";

export default function App() {
    console.log("useRef11 malli render ayyindii ", new Date().toISOString());
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    var count33 = 0; // ee comp malli malli render ayina pratisaari, count33 --> 0 ki set aipotundi...
    count33 = count33 + 1;

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h1>Render Count1: {count.current}</h1>
            <h1>Render Count2: {count33}</h1>
        </>
    );
}