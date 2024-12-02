import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1);
                setNumber(number + 1);
                setNumber(number + 1);
            }}> +3
            </button>

            <h1>{number2}</h1>
            <button onClick={() => {
                setNumber2(number2 + 5);
                alert(number2);
            }}> +5
            </button>

            <h1>{number3}</h1>
            <button onClick={() => {
                setNumber(number + 5);
                setTimeout(() => {
                    alert(number);
                }, 3000);
            }}> +7
            </button>
        </>
    )
}

/*
    Even though you called setNumber(number + 1) three times, 
    in THIS RENDER'S event handler number is always 0, so you set the state to 1 three times. 
    This is why, after your event handler finishes, React re-renders the component with number equal to 1 rather than 3

    For the next render, number is 1

    even if we use setTimeout ---> for number3
    - alert will still display 0
    - The state stored in React may have changed by the time the alert runs, 
    - but it was scheduled using a snapshot of the state at the time the user interacted with it!

*/