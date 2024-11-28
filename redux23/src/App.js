import { Counter } from './features/counter/counter';
import CounterWithMemo from './features/counter/counter_with_memo';
import UnkoComponent1 from "./features/counter/counter_unkoti1";
import UnkoComponent2 from "./features/counter/counter_unkoti2";
import { useState } from 'react';

function App() {
    var style24 = {border: '1px dotted red', width: 'fit-content', padding: '20px', margin: '50px'};
    var [goals23, setGoals23] = useState(0)
    return (
        <div className="App">

            <div style={style24}>
                <h3> goals increase cheste counter component malli render ayindaa - logs choosko </h3>
                <div> goals23 === { goals23 } </div>
                <button onClick={() => { setGoals23(goals23 => goals23 + 1) }}> goals increase cheyyi </button>
            </div>

            <div style={style24}>
                <Counter />
                {/* <CounterWithMemo /> */}
            </div>
            
            <div style={style24}>
                <UnkoComponent1 />
            </div>

            <div style={style24}>
                <UnkoComponent2 />
            </div>

        </div>
    );
}

export default App;
