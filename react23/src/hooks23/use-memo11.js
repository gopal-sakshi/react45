import { useState, useMemo } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    
    // const calculation = expensiveCalculation(count);
    const calculation  = useMemo(
        () => expensiveCalculation(count), 
        [count]     // deps array... only if count changes memoized value is recaptured
    );

    const increment = () => { setCount((c) => c + 1); };

    // kotha todo add cheyyi... but increment chesi count change cheyyaka pothe, calculation jaragadu
    const addTodo = () => { setTodos((t) => [...t, `New Todo_${Date.now()}`]); };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => { return <p key={index}>{todo}</p>; })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation: </h2> {calculation}
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("render ayina prati saari, nenu kotha ga calculate chestaa");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

export default App