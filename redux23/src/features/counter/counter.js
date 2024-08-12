import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
    console.log("counter component malli render ayindi");
    const count = useSelector((state) => {
        console.log("ipudu kotha count ===> ", state.counter.value)
        return state.counter.value;
    })
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <div><span>{count}</span></div>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
        </div>
    )
}