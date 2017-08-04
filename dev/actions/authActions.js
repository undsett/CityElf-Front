import Request from 'superagent';

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

export function logout() {
	return dispatch => {
		localStorage.removeItem('currentUser');
		dispatch(setCurrentUser({}));
	}
}

export function showSignUpModal() {
    return {
        type: 'SHOW_SIGNUP_MODAL'
    }
}

export function hideSignUpModal() {
    return {
        type: 'HIDE_SIGNUP_MODAL'
    }
}