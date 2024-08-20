import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
import store from './app/store'

// import TodoApp from './TodoApp';
// import store from './app/storeTodo'

import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>

        { /* idi basic example ===> increment/decrement functionality */ }
        <App />
        
        {/* idi todo app example */}
        {/* <TodoApp /> */}
    </Provider>
);

/*
    TodoApp is wrapped in Provider ---> with store passed in as prop
*/