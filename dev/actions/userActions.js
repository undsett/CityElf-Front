import Request from 'superagent';

export function getAllForecastsRequest(address) {
    return dispatch => {
        return Request
            .get('http://localhost:8088/services/allforecasts/get')
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
            .post('http://localhost:8088/services/feedback/sendmail')
            .send(feedbackData)
    }    
}