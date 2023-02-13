import axios from "axios";

const Base_URL = "http://localhost:5000";

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
		console.log("tudo ok");
		return response;
	},
	(err) => {
		return new Promise((resolve, reject) => {
			const originalReq = err.config;
			if (err.response.status === 401 && err.config && !err.config._retry) {
				originalReq._retry = true;
				const token = JSON.parse(localStorage.getItem("token"));
				console.log("token", token);
				let res = instance
					.put(`/token/refresh`, { oldToken: token })
					.then((res) => {
						console.log(res);
						const newToken = JSON.stringify(res.data);
						localStorage.setItem("token", newToken);
						originalReq.headers["Authorization"] = `Bearer ${newToken}`;
						return axios(originalReq);
					})
					.catch((err) => {
						console.log("error no refresh", err);
					});
				resolve(res);
			} else {
				reject(err);
			}
		});
	}
);
