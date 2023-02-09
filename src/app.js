import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlertProvide from "./contexts/AlertContext";
import AuthProvider from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
	return (
		<AlertProvide>
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/signUp" element={<SignUpPage />} />
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</AlertProvide>
	);
}
