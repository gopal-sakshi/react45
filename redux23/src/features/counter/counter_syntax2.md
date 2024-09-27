```js
// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
export default combineReducers({ todos, visibilityFilter, reducer23 }) as amricaReducer23;
export default configureStore({
    reducer: amricaReducer23,
});

// reducer23.js      // one of the reducer
export default function (state = initialState, action) { 
    switch (action.type) { 
        case USE_STRING23: { 
            return {
                ...state,
                info23: action.payload.param1 + '__' + action.payload.time23
            }; 
        },
        case 'OTHER': {  }
    }
}


// action_reducer23.js
const action23 = param1 => ({
    type: USE_STRING23,
    payload: {
        param1,
        time23: new Date().toISOString()
    }
})
<button onClick = { () => { action23('real_madrid23') }}> action_reducer23  </button>

import { connect } from "react-redux";
const mapStateToProps = state => { 
    /* return relevant_needed property as props from "big_state_obj" */ 
    return state.reducer23      // we only return reducer23 property from state
}
export default connect(mapStateToProps, { action23 })(ActionReducer23);
```

