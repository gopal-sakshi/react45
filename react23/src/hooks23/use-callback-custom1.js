import { useState, useCallback, useEffect, useRef } from "react";
/* useState & useReducer =====> cause your component to re-render each time */

const func_Count23 = new Set();

export default function App() {
    console.log("use-callback-custom11 re-rendered again ", new Date().toISOString());
    const [value11, setValue11] = useState('');
    const [dep1, setDep1] = useState('some_dependency');

    // APPRAOCH 01 ------> new Function em create avvadu render ayina prati saari... we cache Fun
    // okavela, dep1 change ayithe maatram, new Fn create autundi... setSize increase autundi... 
    // 2nd param empty array --> [] aithe... ika eppatiki newFn eh create avvadu
    // useCallback -- react vaadu ichindi; useCallback11 -- mana custom implementation
    const onChange11 = useCallback11((event) => { setValue11(event.target.value) }, [dep1]);

    // APPROACH 02 ------> render ayina prati sari, new function create autundi... so, set size perigi potaa untadi
    // const onChange11 = (event) => { setValue11(event.target.value);  };


    func_Count23.add(onChange11);

    return (
        <>
            <input value={value11} onChange={onChange11} />;
            <h3>total functions - set size == {func_Count23.size} </h3>
            <button onClick={() => setDep1(new Date().toString())}>Change dependency</button>
        </>
    );
}


// https://stackoverflow.com/questions/64079396/how-would-you-implement-usecallback-using-usestate-from-scratch



/*********************************************************************************/
function useCallback11(fn, deps) {
    const slots = useRef([fn, deps]).current
    if (depsChanged(slots[1], deps)) { slots[0] = fn }
    slots[1] = deps; return slots[0]
}

function depsChanged(deps1, deps2) {
    if (deps1 === undefined || deps2 === undefined) return true
    if (deps1.length !== deps2.length) return true
    for (let i in deps1) { if (!Object.is(deps1[i], deps2[i])) return true }
    return false
}
/*********************************************************************************/