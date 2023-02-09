import axios from "axios";

const Base_URL = "http://localhost:4000";

export const instance = axios.create({
	baseURL: Base_URL,
});

export function createConfig(token) {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
}

instance.interceptors.response.use(
	(response) => {
		console.log("entrou no certo");
		return response;
	},
	(err) => {
		return new Promise((resolve, reject) => {
			const originalReq = err.config;
			if (err.response.status === 401 && err.config && !err.config._retry) {
				originalReq._retry = true;
				localStorage.getItem("TOKEN").then((token) => {
					let res = instance.put(`/refresh`, { oldToken: token }).then((res) => {
						localStorage.setItem("TOKEN", res.data.access_token);
						originalReq.headers["Authorization"] = `Bearer ${res.data.access_token}`;
						return axios(originalReq);
					});
					resolve(res);
				});
			} else {
				reject(err);
			}
		});
	}
);
