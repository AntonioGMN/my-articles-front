import { instance, createConfig } from ".";

export async function create(linkData, token) {
	const config = createConfig(token);
	console.log("config: ", config);
	return await instance.post("/links/create", linkData, config);
}
