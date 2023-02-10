import { instance, createConfig } from ".";

export async function signUp(user) {
	return await instance.post("/users/sign-up", user);
}

export async function login(user) {
	const response = await instance.post("/users/login", user);
	return response;
}

export async function logout(token) {
	const config = createConfig(token);
	const response = await instance.delete("/logout", config);
	return response;
}
