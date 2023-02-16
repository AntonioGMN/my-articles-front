import { useEffect, useState } from "react";
import Article from "../../components/article";
import Section from "../../components/section";
import { useAuth } from "../../contexts/AuthContext";
import * as api from "../../service/apiArticles";
import EditeArticles from "./editeArticle";
import { useAlert } from "../../contexts/AlertContext";

export default function ShowLinks() {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const { token } = useAuth();
	const { setMessage } = useAlert();

	useEffect(() => {
		async function getArticles() {
			try {
				const response = await api.get(token);
				setArticles(response.data);
				setLoading(false);
			} catch (err) {
				return setMessage({ type: "error", text: "Erro ao buscar seus artigos" });
			}
		}
		getArticles();
	}, [articles.length, token, setMessage]);

	if (loading) {
		return <Section>Carregando</Section>;
	}

	return (
		<Section>
			{articles.length === 0
				? "Você ainda não salvou nenhum dos seus artigos favoritos. Começe agora"
				: articles.map((art) => (
						<Article key={art.id}>
							<a href={art.url} target="_blank" rel="noreferrer">
								<img src={art.image} alt="error" />
								<p>{art.title}</p>
							</a>
							<EditeArticles originalArticle={art} />
						</Article>
				  ))}
		</Section>
	);
}
