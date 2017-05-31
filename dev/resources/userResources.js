import Request from 'superagent';

class UserResources {
	const ALL_USERS_URL = "http://localhost:8088/services/users/all";

	getAllUsers() {
		Request.get(ALL_USERS_URL).then((response) => {
			console.log(response.body);
		});
	}
}
export let userResources = new UserResources();