import { useState } from "react";
import Box from "../../components/box";
import Container from "../../components/center";
import { Button, Form } from "../../components/form";

export default function HomePage() {
	const [formData, setFormData] = useState({
		title: "",
		url: "",
	});

	function handlerInput(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	return (
		<Container>
			<Form row heigth="185px">
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
				<Button width={"100px"} heigth="100%">
					Enviar
				</Button>
			</Form>
		</Container>
	);
}
