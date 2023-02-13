import { useState } from "react";
import Container from "../../components/center";
import { Button } from "../../components/button";

import ShowLinks from "./showLinks";
import Header from "../../components/header";
import FromCreateArticle from "./formCreateArticles";
import FormCrawlerArticles from "./formCrawlerArticles";
import { useAuth } from "../../contexts/AuthContext";

export default function HomePage() {
	const [formChange, setFormChange] = useState(true);
	const { logout } = useAuth();

	return (
		<Container top>
			<Header>
				<Button onClick={() => setFormChange(true)}>Save Article</Button>
				<Button onClick={() => setFormChange(false)}>
					Save artigos do seu site favorito
				</Button>
				<Button onClick={() => logout()}>Logout</Button>
			</Header>
			{formChange ? <FromCreateArticle /> : <FormCrawlerArticles />}
			<ShowLinks />
		</Container>
	);
}
