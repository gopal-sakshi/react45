import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoApp from './TodoApp';
import store from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        {/* <App /> */}         { /* idi basic example ===> increment/decrement functionality */ }
        <TodoApp />
    </Provider>
);

/*
    TodoApp is wrapped in Provider ---> with store passed in as prop
*/