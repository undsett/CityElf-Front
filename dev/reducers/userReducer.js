const initialState = {
    isShownEnterAddressModal: false
};

export default (state = initialState, action) => {
    if (action.type === 'SHOW_ENTERADDRESS_MODAL') {
        return state = {
            ...state,
            isShownEnterAddressModal: true
        }
    }
    if (action.type === 'HIDE_ENTERADDRESS_MODAL') {
        return state = {
            ...state,
            isShownEnterAddressModal: false
        }
    }
    return state;
}