import { useState, useEffect, useRef } from "react";
/* useState & useReducer =====> cause your component to re-render each time */

function useRef1(value) {
    const [ref] = useState({ current: value });
    ref.current = value;
    return ref;
}

export default function App() {
    const [inputValue, setInputValue] = useState("");

    var count44 = useRef(0);        // idi React vaadu ichindi
    var count45 = useRef1(0);       // idi mana custom implementation

    useEffect(() => {
        count44.current = count44.current + 1;
        count45.other11 = (count45.other11 || 0) + 1;
    });

    console.log("count44, 45 ===> ", count44.current, count45.other11);

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h1>Render Count1: {count44.current}</h1>
        </>
    );
}


// https://stackoverflow.com/questions/64079396/how-would-you-implement-usecallback-using-usestate-from-scratch
// https://github.com/hackape/fn-with-hooks/blob/master/README.md