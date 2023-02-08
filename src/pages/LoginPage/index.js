import Container from "../../components/center";
import { Form, Button } from "../../components/form";
import { Link } from "react-router-dom";
import { useState } from "react";
import H1 from "../../components/h1";
import Box from "../../components/box";

export default function LoginPage() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	function handlerInput(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	return (
		<Container>
			<Box>
				<H1>Entre Agora</H1>
				<Form>
					<input
						placeholder="Email"
						type="email"
						name="email"
						value={formData.email}
						onChange={(e) => handlerInput(e)}
					/>
					<input
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
