import Container from "../../components/center";
import { Form, Button } from "../../components/form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import H1 from "../../components/h1";
import Box from "../../components/box";
import { useAlert } from "../../contexts/AlertContext";
import * as api from "../../service/apiAuth";
import { useAuth } from "../../contexts/AuthContext";
import Input from "../../components/imput";

export default function LoginPage() {
	const { setMessage } = useAlert();
	const { persistLogin } = useAuth();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	function handlerInput(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function hadlerSubmit(e) {
		e.preventDefault();

		try {
			const response = await api.login(formData);
			console.log(response);
			persistLogin(response.data);
			navigate("/home");
		} catch (error) {
			console.log(error);
			const message = error.response.data.message;
			return setMessage({ type: "error", text: message });
		}
	}

	return (
		<Container>
			<Box>
				<H1>Entre agora</H1>
				<Form onSubmit={(e) => hadlerSubmit(e)}>
					<Input
						placeholder="Email"
						type="email"
						name="email"
						value={formData.email}
						onChange={(e) => handlerInput(e)}
					/>
					<Input
						placeholder="Senha"
						type="password"
						name="password"
						value={formData.password}
						onChange={(e) => handlerInput(e)}
					/>
					<Button type="submit">Entrar</Button>
					<p>
						Ainda não possui cadastro? <Link to={"signUp"}>Cadastre-se agora</Link>
					</p>
				</Form>
			</Box>
		</Container>
	);
}
