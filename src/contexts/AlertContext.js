import { createContext, useContext, useState } from "react";
import Alert from "../components/alert";

const AlertContext = createContext();

export default function AlertProvide({ children }) {
	const [message, setMessage] = useState([]);

	function handleClose() {
		setMessage(null);
	}

	return (
		<AlertContext.Provider value={{ message, setMessage, handleClose }}>
			{children}
			<Alert />
		</AlertContext.Provider>
	);
}

export const useAlert = () => useContext(AlertContext);
