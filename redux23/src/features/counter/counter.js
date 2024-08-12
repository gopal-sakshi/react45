import React from 'react';

// "useSelector" = to get current state; "useDispatch" = start a trigger to update state
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment23 } from './counterSlice';          // these are "actions"

export function Counter() {
    console.log("counter component malli render ayindi");
    const count = useSelector((state) => {
        console.log("ipudu kotha count ===> ", state)
        return state.counter.value;
    })
    const dispatch = useDispatch()

    return (
        <div>
            {/* dispatch() Fn takes an argument ---> which is "action"; here increment() is action */}
            <button onClick={() => dispatch(increment23())}>
                Increment
            </button>
            <div><span>{count}</span></div>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
        </div>
    )
}