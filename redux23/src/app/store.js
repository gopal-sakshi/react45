import { configureStore } from '@reduxjs/toolkit';


// USE THIS FOR increment/decrement
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
    reducer: {
        counter44: counterReducer,
    },
});

// import { createStore } from "redux";

// import rootReducer from "../features/reducers23";
// export default createStore(rootReducer);