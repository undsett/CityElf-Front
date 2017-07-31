const initialState = {
    isAuthenticated: false,
    userData: {}
};

export default (state = initialState, action) => {
    if (action.type === 'SET_CURRENT_USER') {
        return state = {
                ...state,
                isAuthenticated: true,
                userData: action.payload            
            }               
    }
    return state;
}