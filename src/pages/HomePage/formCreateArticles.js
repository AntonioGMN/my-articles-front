import { Form } from "../../components/form";
import Column from "../../components/column";
import Input from "../../components/input";
import { Button } from "../../components/button";
import { useState } from "react";
import { useAlert } from "../../contexts/AlertContext";
import { useAuth } from "../../contexts/AuthContext";
import Row from "../../components/row";
import * as api from "../../service/apiArticles";

export default function FromCreateArticle() {
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
			return setMessage({ type: "error", text: "Erri ao salvar artigo" });
		}
	}

	return (
		<Form row heigth="10vh" width="60vw" onSubmit={(e) => handlerSubmit(e)}>
			<Column>
				<label>Salve seu artigo</label>
				<Row>
					<Column>
						<Input
							height="50%"
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
							type="url"
							value={formData.url}
							onChange={(e) => handlerInput(e)}
						/>
					</Column>
					<Button hover type="submit" width={"100px"} heigth="100%">
						Enviar
					</Button>
				</Row>
			</Column>
		</Form>
	);
}
