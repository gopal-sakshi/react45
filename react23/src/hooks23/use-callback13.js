import React, { useState, useCallback } from "react";
var funccount = new Set();

const App = () => {
    console.log("increment/decrement ====> component didnt re-render", )
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const incrementCounter = useCallback(() => {
        setCount(count + 1);
    }, [count]);    /* only if count changes ---> "new Fn" is created again  */

    const decrementCounter = useCallback(() => {
        setCount(count - 1);
    }, [count]);
    
    const incrementNumber = useCallback(() => {
        setNumber(number + 1);
    }, [number]);   /* only if number changes, "new Fn" is created again */

    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    console.log("set size ====> ", funccount.size);

    return (
        <div>
            <p>Count: {count}</p>
            <p> Map/Set size === {funccount.size}</p>
            <button onClick={incrementCounter}> Increase </button>
            <button onClick={decrementCounter}> Decrease </button>
            <button onClick={incrementNumber}> Increase number </button>
        </div>
    );
};

export default App;