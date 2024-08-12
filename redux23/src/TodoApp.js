import React from "react";
import AddTodo from "./features/others23/AddTodo";
import TodoList from "./features/others23/TodoList";
import VisibilityFilters from "./features/others23/VisibilityFilters";
import "./styles.css"

export default function TodoApp() {
    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
        </div>
    );
}
