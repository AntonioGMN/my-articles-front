import { useState } from "react";
import Box from "../../components/box";
import Container from "../../components/center";
import { Button, Form } from "../../components/form";
import { useAlert } from "../../contexts/AlertContext";
import { useAuth } from "../../contexts/AuthContext";
import * as api from "../../service/apiLinks";

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
			return setMessage({ type: "success", text: "link criado" });
		} catch (error) {
			console.log(error);
			//const message = error.response.data.message;
			//return setMessage({ type: "error", text: message });
			return;
		}
	}

	return (
		<Container>
			<Form row heigth="185px" onSubmit={(e) => handlerSubmit(e)}>
				<Box>
					<input
						placeholder="title"
						required
						name="title"
						type="text"
						value={formData.title}
						onChange={(e) => handlerInput(e)}
					></input>
					<input
						placeholder="url"
						required
						name="url"
						type="text"
						value={formData.url}
						onChange={(e) => handlerInput(e)}
					></input>
				</Box>
				<Button type="submit" width={"100px"} heigth="100%">
					Enviar
				</Button>
			</Form>
		</Container>
	);
}
