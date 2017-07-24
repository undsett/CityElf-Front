import Request from 'superagent';

export function userSignupRequest(email, password) {
    return dispatch => {
        return Request
            .post('http://localhost:8088/services/registration/register')
            .send('firebaseid=WEB')
            .send('email=' + email)
            .send('password=' + password)
           
            // .end((error, response)=> {
            //     console.log(response);
            //     console.log(JSON.parse(response.text).code);
            // })      
    }
}