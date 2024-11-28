import { configureStore } from '@reduxjs/toolkit';

// // APPROACH 01  ===> use combineReducers
// import amricaReducer23 from "../features/others23_reducers23";
// export default configureStore({
//     reducer: amricaReducer23,
// });


// // APPROACH 02   ----> WORKING
import todoReducer from "../features/others23_reducers23/todos";
import visibilityReducer from "../features/others23_reducers23/visibilityFilter";
import reducer23Reducer from "../features/others23_reducers23/reducer23";

export default configureStore({
    reducer: {
        todos: todoReducer, 
        visibilityFilter: visibilityReducer, 
        reducer23: reducer23Reducer
    }
});