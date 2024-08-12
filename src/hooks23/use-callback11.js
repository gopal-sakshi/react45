/*
    useCallback is to prevent a component from re-rendering unless its props have changed.    
    useMemo returns a memoized value and useCallback returns a memoized function
*/

import { useState } from "react";
import Todos from "./use-callback11_todos";

export default function App () {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    
    const increment = () => {
        setCount((c) => c + 1);
    };
    
    const addTodo = () => {
        setTodos((t) => [...t, `New Todo_${Date.now()}`]);
    };

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};
