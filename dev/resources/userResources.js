import Request from 'superagent';

class UserResources {

    // userRegistration(email, phone, password) {
    //     Request
    //         .post('http://localhost:8088/services/registration/register')
    //         .send('fireBaseID=WEB')
    //         .send('email=' + email)
    //         .send('password=' + password)
    //         .end((error, response)=> {
    //             console.log(response.text);
    //         })
    // }
    
	checkLoginPassword(email, password) {
		Request
            .post('http://localhost:8088/services/registration/login')
            .send('email=' + email)
            .send('password=' + password)
            .end((error, response)=> {
                console.log(response.text);
            })

	}

    // updateCurrentUserData(newCurrentUserData) {
    //     const UPDATE_CURRENT_USER_URL = "http://localhost:8088/services/users/updateUser";
    //     Request.put(UPDATE_CURRENT_USER_URL)
    //         .send(newCurrentUserData)
    //         .end();
    // }

}
export let userResources = new UserResources();