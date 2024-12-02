import { useState } from "react";       // without using useContext ---> this is the example

export default function Component1() {
    const [user, setUser] = useState("Jesse Hall");
    return (
        <>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </>
    );
}

// Even though components 2, 3, 4 did not need the state, 
// they had to pass the state along so that it could reach component 5.

function Component2({ user }) {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 user={user} />
        </>
    );
}

function Component3({ user }) {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 user={user} />
        </>
    );
}

function Component4({ user }) {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 user={user} />
        </>
    );
}

function Component5({ user }) {
    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

