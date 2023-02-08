import styled from "styled-components";

export const Form = styled.form`
	padding: 25px;
	border-radius: 15px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 15px;
	margin-bottom: 16px;
	color: #31cc93;

	background-color: #ffffff;

	@media (max-width: 700px) {
		width: 100%;
	}

	input {
		all: unset;
		box-sizing: border-box;

		width: 100%;
		height: ${(pros) => (pros.inputHeight ? pros.inputHeight : "62px")};

		color: #000;
		font-size: 18px;

		background: #ffffff;
		padding: 21px;
		border: 1px solid rgb(48 51 47 / 25%);
		border-radius: 12px;
		box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);

		::placeholder {
			color: #9c9c9c;
			font-family: "Lexend Deca", sans-serif;
		}
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

	width: 100%;

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
