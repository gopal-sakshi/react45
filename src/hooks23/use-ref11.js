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
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h1>Render Count: {count.current}</h1>
        </>
    );
}