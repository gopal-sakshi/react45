import { useState } from 'react';

export default function AddTask({ handleChange}) {
    const [text, setText] = useState("");
    function updateText(e) { setText(e.target.value); }
    return (
        <>
            <input type="text" value={text} onChange={updateText}></input>
            <button onClick={() => handleChange(text)}>Add</button>
        </>
    )
}