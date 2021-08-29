/**
    reducer = function that returns a state
    (initialState, action to apply to state)
*/
const themeReducer = (state = { darkThemeEnabled: false }, action) => {
    console.log(action.type)
    switch (action.type) {
        case "toggleTheme":
            return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
    
        default:
            return state;
    }
}
  
export default themeReducer;