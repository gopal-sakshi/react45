export default function ContactList({ contacts, selectedId, dispatch }) {
    function despatch23() {
        dispatch({ type: 'changed_selection', contactId: contact.id});
    }
    
    return (        
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <button onClick={despatch23}>
                        { selectedId === contact.id ? 
                            <b>{contact.name}</b> : 
                            contact.name
                        }
                    </button>
                </li>
            ))}
        </ul>
    );
}
