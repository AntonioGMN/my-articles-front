import { useState } from "react";
import Container from "../../components/center";
import { Button, Form } from "../../components/form";
import Input from "../../components/imput";
import Row from "../../components/row";
import { useAlert } from "../../contexts/AlertContext";
import { useAuth } from "../../contexts/AuthContext";
import * as api from "../../service/apiArticles";
import ShowLinks from "./showLinks";

export default function HomePage() {
	const { setMessage } = useAlert();
	const { token } = useAuth();
	const [formData, setFormData] = useState({
		title: "",
		url: "",
	});

	function handlerInput(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function handlerSubmit(e) {
		e.preventDefault();

		try {
			await api.create(formData, token);
			window.location.reload();
		} catch (error) {
			const message = error.response;
			return setMessage({ type: "error", text: message });
		}
	}

	return (
		<Container top>
			<Form row heigth="12vh" width="60vw" onSubmit={(e) => handlerSubmit(e)}>
				<Row>
					<Input
						height="45%"
						placeholder="title"
						required
						name="title"
						type="text"
						value={formData.title}
						onChange={(e) => handlerInput(e)}
					/>
					<Input
						height="45%"
						placeholder="url"
						required
						name="url"
						type="text"
						value={formData.url}
						onChange={(e) => handlerInput(e)}
					/>
				</Row>
				<Button hover type="submit" width={"100px"} heigth="100%">
					Enviar
				</Button>
			</Form>
			<ShowLinks></ShowLinks>
		</Container>
	);
}
