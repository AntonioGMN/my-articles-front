import { Form } from "../../components/form";
import Collun from "../../components/column";
import Input from "../../components/input";
import { Button } from "../../components/button";
import { useState } from "react";
import { useAlert } from "../../contexts/AlertContext";
import { useAuth } from "../../contexts/AuthContext";
import * as api from "../../service/apiArticles";
import Row from "../../components/row";
import CircularProgress from "@mui/material/CircularProgress";

export default function FormCrawlerArticles() {
	const { setMessage } = useAlert();
	const { token } = useAuth();
	const [url, setUrl] = useState("");
	const [loading, setLoading] = useState(false);

	async function handlerSubmit(e) {
		e.preventDefault();

		try {
			setLoading(true);
			await api.crawler(url, token);
			window.location.reload();
		} catch (error) {
			return setMessage({
				type: "error",
				text: "Erro ao salvar artigos do site indicado",
			});
		}
	}

	return (
		<Form row heigth="10vh" width="60vw" onSubmit={(e) => handlerSubmit(e)}>
			<Collun>
				<label>De qual site quer buscar artigos?</label>
				<Row>
					<Input
						placeholder="URL"
						height="100%"
						type="url"
						required
						value={url}
						onChange={(e) => setUrl(e.target.value)}
					/>
					<Button hover type="submit" width={"100px"} heigth="100%">
						{loading ? <CircularProgress /> : "Buscar"}
					</Button>
				</Row>
			</Collun>
		</Form>
	);
}
