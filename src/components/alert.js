import { Alert as MUIAlert, Snackbar } from "@mui/material";
import { useAlert } from "../contexts/AlertContext";

export default function Alert() {
	const { message, handleClose } = useAlert();

	return (
		<Snackbar open={!!message} autoHideDuration={2000} onClose={handleClose}>
			<MUIAlert
				variant="filled"
				onClose={handleClose}
				severity={message?.type || "error"}
				sx={{ width: "100%" }}
			>
				{message?.text}
			</MUIAlert>
		</Snackbar>
	);
}
