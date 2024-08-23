import { useState, useEffect } from "react";

export default function UseEffect23() {

    const [time23, setTime23] = useState("time23");
    const [time24, setTime24] = useState("time24");

    useEffect(() => {
        console.log("time maarina prati saari useEffect trigger autundi roi");
        document.title = new Date().toISOString()
    }, [time23]);

    return (
        <>
            <p>understanding use effect - document title </p>
            <button onClick={() => { setTime23(Date.now()) } }> time23 marchu ra </button> {time23} <br></br>
            <button onClick={() => { 
                console.log("time24 maarindi, but useEffect exec avvaledu" );
                setTime24(Date.now()) 
            }}> 
                time24 marchu ra
            </button>  {time24}
        </>
    );
}

/*
    useEffect
    - contains logic that does side-effects (change things outside of component)
    - setting cookies, changing HTML
    - useEffect runs after things are done rendering

    useEffect
    - what it holds is a function that gets called when the passed props in an array change.
*/