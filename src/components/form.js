import styled from "styled-components";

export const Form = styled.form`
	height: ${(props) => (props.heigth ? props.heigth : "auto")};
	width: ${(props) => (props.width ? props.width : "auto")};
	padding: 20px;
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

	p,
	a {
		width: 100%;
		text-align: start;
		color: #c0208f;
		font-size: 15px;
	}
`;

export const Button = styled.button`
	all: unset;
	box-sizing: border-box;
	border-radius: 12px;
	cursor: pointer;

	width: ${(props) => (props.width ? props.width : "100%")};
	height: 100%;

	font-style: normal;
	font-size: 14px;
	font-weight: 700;
	line-height: 18px;
	text-align: center;
	color: #ffffff;

	padding: 16px;
	background: #c0208f;
	border-radius: 12px;
`;
