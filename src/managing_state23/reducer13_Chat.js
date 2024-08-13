import { useState } from 'react';

export default function Chat({ contact, message, dispatch }) {
    return (
        <>
            <textarea value={message} placeholder={'Chat to ' + contact.name}
                onChange={(e) => {
                    
                }}
            />
            <br />
        </>
    );
}
