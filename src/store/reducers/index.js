import { combineReducers } from "redux";
import counterReducer from "./countReducer";
import themeReducer from "./themeReducer";

//store has account which is key, and accountReducer which is value
const reducers = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
});

export default reducers;
