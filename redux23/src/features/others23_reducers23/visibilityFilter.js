import { SET_FILTER, USE_STRING23 } from "../others23/actionTypes";
import { VISIBILITY_FILTERS } from "../others23/constants";

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
    console.log("action ===> ", action)
    switch (action.type) {
        case SET_FILTER: {
            console.log("set filter called23")
            return action.payload.filter;
        }
        case USE_STRING23: {
            // return {
            //     ...state,
            //     info23: action.payload.time23
            // }
            console.log("use string23 called ", state);
            return {
                ...state,
                // info23: action.payload.param1 + '__' + action.payload.time23
            };
        }
        default: {
            return state;
        }
    }
};

export default visibilityFilter;
