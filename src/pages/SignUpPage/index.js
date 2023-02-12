import Container from "../../components/center";
import { Form } from "../../components/form";
import { Button } from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import H1 from "../../components/h1";
import Box from "../../components/box";
import * as api from "../../service/apiAuth";
import { useAlert } from "../../contexts/AlertContext";
import Input from "../../components/input";

export default function SignUpPage() {
	const navigate = useNavigate();
	const { setMessage } = useAlert();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	function handlerInput(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function hadlerSubmit(e) {
		e.preventDefault();

		delete formData.confirmPassword;

		try {
			await api.signUp(formData);
			navigate("/");
		} catch (error) {
			const message = error.response.data.message[0];
			setMessage({ type: "error", text: message });
			return;
		}
	}

	return (
		<Container>
			<Box>
				<H1>Cadastre-se</H1>
				<Form onSubmit={(e) => hadlerSubmit(e)}>
					<Input
						placeholder="Nome"
						type="text"
						name="name"
						value={formData.name}
						onChange={(e) => handlerInput(e)}
						required
					/>
					<Input
						placeholder="Email"
						type="email"
						name="email"
						value={formData.email}
						onChange={(e) => handlerInput(e)}
						required
					/>
					<Input
						placeholder="Senha"
						type="password"
						name="password"
						value={formData.password}
						onChange={(e) => handlerInput(e)}
						required
					/>
					<Input
						placeholder="Confirme Senha"
						type="password"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={(e) => handlerInput(e)}
						required
					/>
					<Button>Cadastre-se</Button>
					<p>
						Já possui cadastro? <Link to={"/"}>Ir pra página de login</Link>
					</p>
				</Form>
			</Box>
		</Container>
	);
}
