import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index"
import thunk from "redux-thunk"

/**
 * store has reducers, default state, and optionally middleware
 * Note: Middleware must be used to help redux with
 * async requests. Dispatch() is async
 * Also allows actionCreators to be async
 * TIP: npx-create-react-app --template redux
 */
const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

export default store;