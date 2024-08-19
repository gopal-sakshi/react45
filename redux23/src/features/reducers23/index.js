import { combineReducers } from "redux";

import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import reducer23 from "./reducer23";

export default combineReducers({ todos, visibilityFilter, reducer23 });
