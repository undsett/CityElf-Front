const initialState = {
    isShownEnterAddressModal: false,
    isShownSettingsModal: false
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
    if (action.type === 'SHOW_SETTINGS_MODAL') {
        return state = {
            ...state,
            isShownSettingsModal: true
        }
    }
    if (action.type === 'HIDE_SETTINGS_MODAL') {
        return state = {
            ...state,
            isShownSettingsModal: false
        }
    }
    return state;
}