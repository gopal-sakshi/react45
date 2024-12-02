import { useReducer } from 'react';     // instead of useReducer ===> see reducer14_from_scratch.js
import Chat from './reducer13_Chat.js';
import ContactList from './reducer13_ContactList.js';
import { initialState, messengerReducer } from './reducer13_msgReducer';

export default function Messenger() {
    const [state, dispatch] = useReducer(messengerReducer, initialState);
    const message = state.message;
    const contact = contacts.find((c) => c.id === state.selectedId);
    return (
        <div>
            <ContactList contacts={contacts} selectedId={state.selectedId} dispatch={dispatch} />
            <Chat key={contact.id} message={message} contact={contact} dispatch={dispatch} />
        </div>
    );
}

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
];
