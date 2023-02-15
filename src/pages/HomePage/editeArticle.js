import { BiPencil } from "react-icons/bi";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Form } from "../../components/form";
import { useState } from "react";
import Input from "../../components/input";
import * as api from "../../service/apiArticles";
import { useAuth } from "../../contexts/AuthContext";
import { useAlert } from "../../contexts/AlertContext";

export default function EditeArticles({ originalArticle }) {
	const [open, setOpen] = useState(false);
	const [article, setArticle] = useState(originalArticle);
	const { token } = useAuth();
	const { setMessage } = useAlert();

	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

	function handlerInput(e) {
		setArticle({ ...article, [e.target.name]: e.target.value });
	}

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const editeArticle = async () => {
		try {
			delete article.image;
			await api.update(article, token);
			window.location.reload();
		} catch (erro) {
			return setMessage({
				type: "error",
				text: "Erro ao salvar artigos do site indicado",
			});
		}
	};

	return (
		<>
			<div>
				<BiPencil
					cursor="pointer"
					style={IconStyle}
					onClick={() => {
						handleClickOpen();
					}}
				/>
			</div>
			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
				aria-labelledby="responsive-dialog-title"
			>
				<DialogTitle id="responsive-dialog-title">{"Edite Artigo"}</DialogTitle>
				<DialogContent>
					<Form>
						<Input
							required
							name="title"
							type="text"
							original
							defaultValue={originalArticle.title}
							onChange={(e) => handlerInput(e)}
						/>
						<Input
							required
							name="url"
							type="url"
							defaultValue={originalArticle.url}
							onChange={(e) => handlerInput(e)}
						/>
					</Form>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Cancelar
					</Button>
					<Button onClick={editeArticle} autoFocus>
						Salvar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

const IconStyle = {
	position: "absolute",
	top: "8px",
	right: "10px",
	fontSize: "1.5em",
};
