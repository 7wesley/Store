/**
 * Action creator is a func that dispatches an action
 * to a reducer. Reducer then interprets that action
 * and manipulates the store.
 * Note: Could put each action in its own file
 */

export const incrementCounter = () => {
    return (dispatch) => {
        dispatch({
            type: "increment",
            payload: 1
        });
    };
};

export const toggleTheme = () => {
    return (dispatch) => {
        dispatch({
            type: "toggleTheme",
        });
    };
};