import styled from "styled-components";

export const Button = styled.button`
	all: unset;
	box-sizing: border-box;
	border-radius: 12px;
	cursor: pointer;

	width: ${(props) => (props.width ? props.width : "100%")};
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

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
