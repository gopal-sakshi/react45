// "useSelector" = to get current state; "useDispatch" = start a trigger to update state
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { decrement, increment23, incrementByAmount, incrementAsync1, incrementAsync2, makeApiCall23 } from './counterSlice';          // these are "actions"

export function Counter() {
    console.log("counter component ki em input change avvakapoyina malli render ayindi");
    console.log("goals increase chesina --> Counter component malli render ayindi");
    const count = useSelector((state) => {
        console.log("ipudu kotha count ===> ", state)
        return state.counter44.value;
    })
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            {/* dispatch() Fn takes an argument ---> which is "action"; here increment() is action */}
            <button onClick={() => dispatch(increment23())}> Increment </button>
            <div><span>count23 === {count}</span></div>
            <button onClick={() => dispatch(decrement())}> Decrement </button>
            <div>
                <input 
                    placeholder="Set increment amount" 
                    value={incrementAmount} 
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
                    Add Amount
                </button>
                <button onClick={() => dispatch(incrementAsync1(Number(incrementAmount) || 0))}>
                    Add Async1
                </button>
                <button onClick={() => dispatch(incrementAsync2(Number(incrementAmount) || 0))}>
                    Add Async2
                </button>
                <button onClick={() => dispatch(makeApiCall23())}>
                    makeApiCall23
                </button>
            </div>
        </div>
    )
}