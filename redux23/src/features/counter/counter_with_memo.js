import { memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment23 } from './counterSlice';          // these are "actions"

const CounterWithMemo = () => {
    console.log("counter component malli render ayindi");
    const count = useSelector((state23) => {
        console.log("ipudu kotha count ===> ", state23)
        return state23.counter44.value;
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

export default memo(CounterWithMemo)