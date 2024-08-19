import { Counter } from './features/counter/counter';
import CounterWithMemo from './features/counter/counter_with_memo';

import { useState } from 'react';
function App() {
    var [goals23, setGoals23] = useState(0)
    return (
        <div className="App">
            <h3> goals increase cheste counter component malli render ayindaa </h3>
            <div> goals23 === { goals23 } </div>
            <div style={{border: '1px dotted red', width: 'fit-content', padding: '5px', margin: '5px'}}>
                {/* <Counter /> */}
                <CounterWithMemo />
            </div>
            <button onClick={() => { setGoals23(goals23 => goals23 + 1) }}> goals increase cheyyi </button>
        </div>
    );
}

export default App;
