import axios from "axios";

const Base_URL = process.env.REACT_APP_BASE_URL;

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
		return response;
	},
	(err) => {
		return new Promise(async (resolve, reject) => {
			const originalReq = err.config;
			if (err.response.status === 401 && err.config && !err.config._retry) {
				try {
					originalReq._retry = true;
					const token = JSON.parse(localStorage.getItem("token"));
					const res = await instance.put(`/token/refresh`, { oldToken: token });
					localStorage.setItem("token", JSON.stringify(res.data));
					originalReq.headers["Authorization"] = `Bearer ${res.data}`;

					const newResponse = await axios(originalReq);
					resolve(newResponse);
				} catch (erro) {
					reject(err);
				}
			} else {
				reject(err);
			}
		});
	}
);
