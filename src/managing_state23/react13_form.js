import { useState } from 'react';

export default function Form22() {

    const [firstName, setFirst] = useState("Jane");
    const [lastName, setLast] = useState("Jacobs");
    const [isEdit, setEdit] = useState(false);

    function handleClick() { setEdit(!isEdit); }
    function handleFirstName(e) { setFirst(e.target.value) }
    function handleLastName(e) { setLast(e.target.value) }

    return (
        <div>
            <label> <h3>FirstName:</h3>
                { isEdit ? <input onChange={handleFirstName} value={firstName}></input> : firstName }
            </label>
            <label> <h3>LastName: </h3>
                { isEdit ? <input onChange={handleLastName} value={lastName}></input> : lastName }
            </label>
            <div>
                <button onClick={handleClick}>
                    { isEdit ? 'Save Profile' : 'Edit Profile'}
                </button>
            </div>        
            <h3>{firstName} {lastName}</h3>
        </div>
    )
}