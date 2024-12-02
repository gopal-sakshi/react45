import { memo } from "react";

const Todos = ({ todos }) => {
    // Todos component re-renders ---> we can verify this my noticing below console log
    console.log("memo23_todos ---> got rendered again");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </>
    );
};

// export default Todos;
export default memo(Todos);