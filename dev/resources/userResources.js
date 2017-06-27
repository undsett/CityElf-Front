import Request from 'superagent';

class UserResources {

	updateCurrentUserData(newCurrentUserData) {
		const UPDATE_CURRENT_USER_URL = "http://localhost:8088/services/users/updateUser";
		Request.put(UPDATE_CURRENT_USER_URL)
			.send(newCurrentUserData)
			.end();
	}

}
export let userResources = new UserResources();