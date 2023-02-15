import { createContext, useContext, useState } from "react";
import { useAlert } from "./AlertContext";
import * as api from "../service/apiAuth";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const persistedToken = JSON.parse(localStorage.getItem("token"));
	const [token, setToken] = useState(persistedToken);
	const { setMessage } = useAlert();

	async function persistLogin(newToken) {
		setToken(newToken);
		localStorage.setItem("token", JSON.stringify(newToken));
	}

	async function logout() {
		try {
			await api.logout();
		} catch (err) {
			setMessage({ text: err });
		}

		localStorage.clear();
		window.location.replace("/login");
	}

	return (
		<AuthContext.Provider value={{ token, persistLogin, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
