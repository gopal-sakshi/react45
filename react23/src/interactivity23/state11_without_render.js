import { useState } from 'react';

/*
    A state variable is only necessary to keep information between re-renders of a component. 
    Within a single event handler, a regular variable will do fine. 
    Don’t introduce state variables when a regular variable works well.
*/

/* export default */ function FeedbackForm() {
    const [name, setName] = useState('');

    function handleClick() {
        setName(prompt('What is your name?'));
        alert(`Hello, ${name}!`);
    }

    return (
        <button onClick={handleClick}> Greet </button>
    );
}

export default function Feedback23() {
    function handleClick() {
        const name = prompt('What is your name?');
        alert(`Hello, ${name}!`);
    }
    
    return (
        <button onClick={handleClick}>Greet</button>
    );
}