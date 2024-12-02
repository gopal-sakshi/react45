import React, { useState, useCallback } from 'react';
const funccount = new Set();
// problem of re-rendering even when the props aren't changed

const App = () => {
    console.log("increment/decrement ====> 3 Fns are recreated Again", )
    // Set() means no duplicates... since 3 new Fns are created, they arent duplicates and set size keeps increasing

    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)

    const incrementCounter = () => { setCount(count + 1) }
    const decrementCounter = () => { setCount(count - 1) }
    const incrementNumber = () => { setNumber(number + 1) }

    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    console.log("set size problem ====> ", funccount.size);

    return (
        <div>
            Problem Count: {count}
            <button onClick={incrementCounter}> Increase </button>
            <button onClick={decrementCounter}> Decrease </button>
            <button onClick={incrementNumber}> increase number </button>
            <h3> Map/Set size entha ante === { funccount.size } </h3>
        </div>
    )
}

export default App;