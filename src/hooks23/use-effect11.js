import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Timer() {
    const [count11, setCount12] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount12((count11) => count11 + 1);
        }, 4000);
    }, []); // <- add empty brackets here

    return <h1>idi w3 example lo === rendered {count11} times!</h1>;
}
