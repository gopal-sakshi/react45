import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

/*
    createSlice ==> A function that accepts
    - an initial state
    - an object full of reducer functions
    - "slice name"
    --- automatically generates "action creators" and "action types" that correspond to the reducers and state.
*/

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment23: (state) => {
            console.log("state will be incremented ", state);
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
            state.value += 1
        },
        decrement: (state) => {
            console.log("state will be decremented ", state);
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            console.log("state will change by amount ==> ", state, action);
            state.value += action.payload
        },
        timeFromApi: (state, action) => {
            console.log("reducer time ni fetch chesindi ===> ", state, action);
            state.time23 = action.payload.time23
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment23, decrement, incrementByAmount, timeFromApi } = counterSlice.actions


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync1 = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

export const incrementAsync2 = (amount) => {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(incrementByAmount(amount))
        }, 1000)
    }
}

export const makeApiCall23 = (amount) => {
    return async function (dispatch) {
        return axios.get(`http://localhost:8081/json23`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error("api call tannindi");
                } else {
                    dispatch(timeFromApi(res.data));
                    return res;
                }
            })
            .catch(err => {});
    }
}

export default counterSlice.reducer