import { useState } from "react";
import Todos from './memo23_todos';

export default function Memo23() {
    
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);
    
    const increment = () => {
        setCount((c) => c + 1);
    };
      
    return (
        <>
            {/* we arent changing input to Todos component; but still it gets re-rendered */}
            <Todos todos={todos} />
            {/* we need to use memo - to skip unnecessary re-rendering */}

            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}