/**
    reducer = function that returns a state
    (initialState, action to apply to state)
*/

export const countReducer = (state = 0, action) => {
    switch (action.type) {
        case "add":
            return state + action.payload
        default:
            return state;
    }
}

export const themeReducer = (state = false, action) => {
    switch (action.type) {
        case "toggleTheme":
            return !state;
    
        default:
            return state;
    }
}
