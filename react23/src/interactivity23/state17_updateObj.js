import { useState } from 'react';

export default function Scoreboard() {
    const [player, setPlayer] = useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
    });

    function handlePlusClick() {
        // ikkada player ni mutate chestunnaamu... but setPlayer evvaru call cheyyaledu... 
        // so, state variable "player" just update ayyi untundi...
        // vere input field firstNameChange --> setPlayer call chestundi... apudu "score" update autundi...
        player.score++;
    }

    function handleFirstNameChange(e) {
        setPlayer({
            ...player,
            firstName: e.target.value,
        });
    }

    function handleLastNameChange(e) {
        // score & firstName will revert to default/original values
        setPlayer({
            lastName: e.target.value
        });
    }

    return (
        <>
            <label>
                Score: <b>{player.score}</b> {' '}
                <button onClick={handlePlusClick}> +1 </button>
            </label>
            <label>
                First name:
                <input value={player.firstName} onChange={handleFirstNameChange} />
            </label>
            <label>
                Last name:
                <input value={player.lastName} onChange={handleLastNameChange} />
            </label>
        </>
    );
}
