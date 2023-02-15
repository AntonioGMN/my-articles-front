import styled from "styled-components";

const Article = styled.article`
	height: 20%;
	width: 30%;
	background-color: aliceblue;
	border-radius: 15px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	position: relative;

	a {
		width: 100%;
		height: 100%;
	}

	img {
		width: 100%;
		height: 100%;
		border-radius: 15px;
	}

	p {
		color: #c01f8f;
		font-size: large;
		position: absolute;
		bottom: 5px;
		left: 5px;
	}

	div {
		display: none;
	}

	&:hover {
		width: 100%;
		div {
			display: block;
			background-color: red;
		}
	}

	@media (max-width: 700px) {
		width: 100%;
	}
`;

export default Article;
