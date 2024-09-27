```js
// index.js
import store from './app/store'
<Provider store={store}>        {/* store ni oka prop laa pampistaamu */}
    <App />
</Provider>


// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
export default configureStore({
    reducer: {
        counter44: counterReducer,      // initial state
    },
});

// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';     // createSlice = initialState, obj_with_reducer_Fns, sliceName
export const counterSlice = createSlice({ 
    name: '',
    initialState: { },
    reducers: {
        increment23: (state) => { },
        decrement23: (state) => { }
    }
})
export const { increment23, decrement23 } = counterSlice.actions

export const incrementAsync1 = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}


// Counter.js
const count = useSelector((state) => {
    return state.counter44.value;
});
{ <button onClick={() => dispatch(decrement23())}> Decrement </button> }

```