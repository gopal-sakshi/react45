// If we tried to count how many times our application renders using the useState Hook, 
// we would be caught in an infinite loop since this Hook itself causes a re-render.


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