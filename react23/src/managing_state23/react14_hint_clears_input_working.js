import { useState } from 'react';
/*
    agenda ===> <Form /> must be rendered at the same place for React to preserve the state
    dont try if/else block... try below approach
*/
export default function App() {
    const [showHint, setShowHint] = useState(false);    
    return (
        <div>
            {showHint && <p><i>Hint: Your favorite city?</i></p>}
            <Form />

            {showHint ? 
                ( <button onClick={() => { setShowHint(false); }}> Hide hint </button>) : 
                ( <button onClick={() => { setShowHint(true); }}> Show hint </button> )
            }
            {/* <button onClick={() => { setShowHint(false); }}>Hide hint</button> */}
        </div>
    );
}

function Form() {
    const [text, setText] = useState('');
    return (
        <textarea value={text} onChange={e => setText(e.target.value)} />
    );
}