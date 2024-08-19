import { ADD_TODO, TOGGLE_TODO, SET_FILTER, USE_STRING23 } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const setFilter = filter => ({ 
    type: SET_FILTER, 
    payload: { filter } 
});

export const action23 = param1 => ({
    type: USE_STRING23,
    payload: {
        param1,
        time23: new Date().toISOString()
    }
})