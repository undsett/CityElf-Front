import isEmpty from 'lodash/isEmpty';

const initialState = {
    isAuthenticated: false,
    userData: {},
    isShownSignUpModal: false
};

export default (state = initialState, action) => {
    if (action.type === 'SET_CURRENT_USER') {
        return state = {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                userData: action.payload            
            }               
    }
    if (action.type === 'SHOW_SIGNUP_MODAL') {
        return state = {
            ...state,
            isShownSignUpModal: true
        }
    }
    if (action.type === 'HIDE_SIGNUP_MODAL') {
        return state = {
            ...state,
            isShownSignUpModal: false
        }
    }
    return state;
}