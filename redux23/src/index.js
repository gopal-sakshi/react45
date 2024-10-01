import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

/************** App_edokati23 & store *******************************/

// import App_edokati23 from './App';
// import store from './app/store';

// import App_edokati23 from './App_Todo';
// import store from './app/storeTodo';

import App_edokati23 from "./App_ecommerce24";
import store from "./ecommerce24/redux-stuff/cart-store";

/**********************************************************************/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App_edokati23 />
    </Provider>
);