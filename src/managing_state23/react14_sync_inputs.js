import { useState } from 'react';

// SYNCED INPUTS ===> just move the state upwards to parent component
export default function SyncedInputs() {
    const [val23, setVal23] = useState("");

    function handleIpChange(value44) {
        console.log("rcvd in parent ", value44);
        setVal23(value44)
    }
    return (
        <>
            <Input label="First input" text={val23} sendParent={handleIpChange}/>
            <Input label="Second input" text={val23} sendParent={handleIpChange} />
        </>
    );
}

function Input({ label, text, sendParent }) {

    function handleChange23(e) {
        sendParent(e.target.value);
    }

    return (
        <label>
            {label}
            {' '}
            <input value={text} onChange={handleChange23} />
        </label>
    );
}
