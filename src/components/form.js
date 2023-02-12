import styled from "styled-components";

export const Form = styled.form`
	height: ${(props) => (props.heigth ? props.heigth : "auto")};
	width: ${(props) => (props.width ? props.width : "auto")};
	padding: 10px;
	border-radius: 15px;

	display: flex;
	flex-direction: ${(props) => (props.row ? "row" : "column")};
	justify-content: flex-start;
	align-items: center;
	gap: 15px;
	color: #31cc93;

	background-color: #ffffff;

	@media (max-width: 700px) {
		width: 90%;
	}

	label {
		font-size: 20px;
		color: #a6a3a1;
	}

	p,
	a {
		width: 100%;
		text-align: start;
		color: #c0208f;
		font-size: 15px;
	}
`;
