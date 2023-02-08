import Container from "../../components/center";
import { Form, Button } from "../../components/form";
import { Link } from "react-router-dom";
import { useState } from "react";
import H1 from "../../components/h1";
import Box from "../../components/box";

export default function SignUpPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	function handlerInput(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	return (
		<Container>
			<Box>
				<H1>Cadastre-se</H1>
				<Form>
					<input
						placeholder="Nome"
						type="text"
						name="name"
						value={formData.name}
						onChange={(e) => handlerInput(e)}
						required
					/>
					<input
						placeholder="Email"
						type="email"
						name="email"
						value={formData.email}
						onChange={(e) => handlerInput(e)}
						required
					/>
					<input
						placeholder="Senha"
						type="password"
						name="password"
						value={formData.password}
						onChange={(e) => handlerInput(e)}
						required
					/>
					<input
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
