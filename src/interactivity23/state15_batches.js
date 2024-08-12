import { useState } from 'react';

export default function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {

        // directly replacing state
        // setPending(pending + 1);
        // await delay(3000);
        // setPending(pending - 1);
        // setCompleted(completed + 1);

        /*
            Inside the handleClick event handler, 
            the values of pending & completed "correspond to what they were at the time of the click event"
            For the first render, pending was 0, so setPending(pending - 1) becomes setPending(-1), which is wrong. 
            Since you want to increment or decrement the counters, 
                rather than set them to a concrete value determined during the click, 
                you can instead pass the updater functions:
        */

        // using updater function
        setPending((pending) => pending + 1);
        await delay(3000);
        setPending((pending) => pending - 1);
        setCompleted((completed) => completed + 1);
    }

    return (
        <>
            <h3> Pending: {pending} </h3>
            <h3> Completed: {completed} </h3>
            <button onClick={handleClick}> Buy </button>
        </>
    );
}

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
