import { USE_STRING23 } from "../others23/actionTypes";

const initialState = {
    info23: 'RMA_23'
}

const reducer23Thingy = (state = initialState, action) => {
    console.log("action ===> ", action)
    switch (action.type) {
        case USE_STRING23: {
            console.log("use string23 called ", state);
            return {
                ...state,
                info23: action.payload.param1 + '__' + action.payload.time23
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer23Thingy;
