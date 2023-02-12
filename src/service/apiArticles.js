import { instance, createConfig } from ".";

export async function create(linkData, token) {
	const config = createConfig(token);
	console.log("config: ", config);
	return await instance.post("/articles/create", linkData, config);
}

export async function get(token) {
	const config = createConfig(token);
	return await instance.get("/articles", config);
}

export async function update(article, token) {
	const config = createConfig(token);
	return await instance.put("/articles", article, config);
}

export async function crawler(url, token) {
	const config = createConfig(token);
	return await instance.post("/articles/crawler", { url }, config);
}
