import Request from 'superagent';

class UserResources {

	getAllUsers() {
		const ALL_USERS_URL = "http://localhost:8088/services/users/all";
		
		Request.get(ALL_USERS_URL).then((response) => {
			console.log(response.body);
		});
	}
}
export let userResources = new UserResources();