import Request from 'superagent';

export function userSignupRequest(email, phone, password) {
    return dispatch => {
        return Request
            .post('http://localhost:8088/services/registration/register')
            .send('fireBaseID=WEB')
            .send('email=' + email)
            .send('password=' + password)
            .end((error, response)=> {
                console.log(response.text);
            })      
    }
}