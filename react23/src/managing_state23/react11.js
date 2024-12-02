import { useState } from 'react';

export default function Form() {

    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') { 
        return <h1>That's right!</h1> 
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    function submitForm(answer) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'lima'
                if (shouldError) {
                    reject(new Error('Good guess but a wrong answer. Try again!'));
                } else {
                    resolve();
                }
            }, 3000);
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing'); setError('error23');
        }
    }

    return (
        <>
            <h2>City quiz</h2>
            <p> In which city is there a billboard that turns air into drinkable water? </p>
            <form onSubmit={handleSubmit}>
                <textarea value={answer} onChange={handleTextareaChange} disabled = { status === 'submitting' }/>
                <br />
                <button disabled = { answer.length === 0 || status === 'submitting'} > Submit </button>
                { error === 'error23' && <p className="Error"> Good guess but, Try again! </p> }
            </form>
        </>
    )
}

/*
    DECLARATIVE PROGRAMMING
        When developing a component:
        Identify all its visual states.
        Determine the human and computer triggers for state changes.
        Model the state with useState.
        Remove non-essential state to avoid bugs and paradoxes.
        Connect the event handlers to set state.

*/