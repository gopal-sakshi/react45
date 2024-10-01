import React from "react";
import AddTodo from "./features/others23/AddTodo";
import TodoList from "./features/others23/TodoList";
import VisibilityFilters from "./features/others23/VisibilityFilters";
import "./styles.css"
import ActionReducer23 from "./features/others23/action_reducer23";

export default function TodoApp() {

    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <ActionReducer23 />
            <hr></hr>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
        </div>
    );
}
