import { combineReducers } from "redux";
import { countReducer, themeReducer } from "./reducers"

//store has account which is key, and accountReducer which is value
export const reducers = combineReducers({
    counter: countReducer,
    theme: themeReducer,
});

export default reducers;
