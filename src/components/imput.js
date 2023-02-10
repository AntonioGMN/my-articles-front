import styled from "styled-components";

export const Input = styled.input`
	all: unset;

	width: 100%;
	height: ${(pros) => (pros.height ? pros.height : "62px")};
	padding-left: 5px;
	color: #000;
	font-size: 18px;

	background: #ffffff;
	border: 1px solid rgb(48 51 47 / 25%);
	border-radius: 12px;
	box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);

	::placeholder {
		color: #9c9c9c;
		font-family: "Lexend Deca", sans-serif;
	}
`;

export default Input;
