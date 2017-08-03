import Request from 'superagent';

export function getAllForecastsRequest(address) {
    return dispatch => {
        return Request
            .get('http://localhost:8088/services/allforecasts/get')
            .query({ address: address })
    }    
}

export function userSignupRequest(email, password) {
    return dispatch => {
        return Request
            .post('http://localhost:8088/services/registration/register')
            .send('firebaseid=WEB')
            .send('email=' + email)
            .send('password=' + password)   
    }
}

export function checkLoginPasswordRequest(email, password) {
    return dispatch => {
        return  Request
            .post('http://localhost:8088/services/registration/login')
            .send('email=' + email)
            .send('password=' + password)
    }
}

export function setCurrentUser(userData) {
    return {
        type: 'SET_CURRENT_USER',
        payload: userData
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
            .post('http://localhost:8088/services/feedback/sendmail')
            .send(feedbackData)
    }    
}