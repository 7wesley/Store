import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index"
import thunk from "redux-thunk"

/**
 * Store has reducers, default state, and optionally middleware
 * Note: Middleware must be used to help redux with
 * async requests. Dispatch() is async
 * Also allows actionCreators to be async
 * TIP: npx-create-react-app --template redux
 */

const localStorageKey = "theme"
const persistedTheme = localStorage.getItem(localStorageKey);

let initialState = {
    theme: persistedTheme ? JSON.parse(persistedTheme) : {},
};

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
)

//Subscribe occurs every dispatch. getState() reads the state tree
store.subscribe(() => {
    const theme = store.getState().theme;
    if (theme == null) return;
    console.log(theme)
    localStorage.setItem(localStorageKey, JSON.stringify(theme));
});

export default store;