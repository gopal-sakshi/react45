// add a ref attribute to an element to access it directly in the DOM.

import { useRef } from "react";

export default function App() {
    const inputElement11 = useRef();
    const focusInput = () => {
        inputElement11.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputElement11} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}