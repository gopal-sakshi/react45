import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
    console.log("count meeda click chesina, todo em affect cheyyaledu... ayina, Todo Comp malli render ayindi ", new Date().toISOString());
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
};

export default memo(Todos);