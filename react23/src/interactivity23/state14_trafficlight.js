import { useState } from 'react';

export default function TrafficLight() {
    const [walk, setWalk] = useState(true);

    function handleClick() {
        // It should not matter if you placed alert before (or) after setWalk
        // That render’s value of walk is fixed. 
        // Calling setWalk will only change it for the next render, but will not affect the event handler from the previous render.

        // alert(walk ? 'Stop is next' : 'Walk is next');
        setWalk(!walk);     // Setting a state variable will ====> QUEUE NEXT RENDER
        alert(walk ? 'Stop is next' : 'Walk is next');
    }

    return (
        <>
            <button onClick={handleClick}>
                Change to {walk ? 'Stop' : 'Walk'}
            </button>
            <h1 style={{
                color: walk ? 'darkgreen' : 'darkred'
            }}>
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>
    );
}
