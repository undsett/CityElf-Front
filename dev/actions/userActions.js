import Request from 'superagent';

export function getAllForecastsRequest(address) {
    return dispatch => {
        return Request
            .get('/services/allforecasts/get')
            .query({ address: address })
    }    
}

export function feedBackRequest(userName, email, theme, message) {
    const feedbackData = {
        customer: userName,
        email: email,
        theme: theme,
        message: message
    }
    return dispatch => {
        return Request
            .post('/services/feedback/sendmail')
            .send(feedbackData)
    }    
}

export function updateUserRequest(userId, newEmail, newPassword, addressId, addressUa, notifSms, notifEmail) {
    console.log("request update user", userId, newEmail, newPassword, addressId, addressUa, notifSms, notifEmail);
    const updatedUserData = {

    }
    return dispatch => {
        // return Request
        //     .put('/services/users/updateuser')
        //     .auth('', '')
        //     .send(updatedUserData)        
    }
    
}

export function showEnterAddressModal() {
    return {
        type: 'SHOW_ENTERADDRESS_MODAL'
    }
}

export function hideEnterAddressModal() {
    return {
        type: 'HIDE_ENTERADDRESS_MODAL'
    }
}

export function showSettingsModal() {
    return {
        type: 'SHOW_SETTINGS_MODAL'
    }
}

export function hideSettingsModal() {
    return {
        type: 'HIDE_SETTINGS_MODAL'
    }
}