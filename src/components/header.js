import styled from "styled-components";

const Header = styled.header`
	height: 5vh;
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: space-evenly;

	button {
		width: 30%;
		height: auto;
		border-radius: 25px;
	}

	@media (max-width: 700px) {
		width: 90%;
		justify-content: space-between;
	}
`;

export default Header;
