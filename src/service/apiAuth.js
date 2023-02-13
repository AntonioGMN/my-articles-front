import { instance, createConfig } from ".";

export async function signUp(user) {
	return await instance.post("/users/sign-up", user);
}

export async function login(user) {
	const response = await instance.post("/users/login", user);
	return response;
}

export async function logout() {
	const token = JSON.parse(localStorage.getItem("token"));
	const config = createConfig(token);
	const response = await instance.delete("/users/logout", config);
	return response;
}
