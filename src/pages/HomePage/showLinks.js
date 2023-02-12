import { useEffect, useState } from "react";
import Article from "../../components/article";
import Section from "../../components/section";
import { useAuth } from "../../contexts/AuthContext";
import * as api from "../../service/apiArticles";
import EditePenIcon from "./editeArticle";

export default function ShowLinks() {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const { token } = useAuth();

	useEffect(() => {
		async function getArticles() {
			try {
				const response = await api.get(token);
				console.log(response.data);
				setArticles(response.data);
				setLoading(false);
			} catch (err) {
				console.error(err);
			}
		}
		getArticles();
	}, [articles.length, token]);

	console.log(articles);

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
							<EditePenIcon originalArticle={art} />
						</Article>
				  ))}
		</Section>
	);
}
