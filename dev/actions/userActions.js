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