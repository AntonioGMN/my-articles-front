import styled from "styled-components";

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;

	@media (max-width: 700px) {
		width: 100%;
		justify-content: center;
		gap: 15px;
	}
`;

export default Container;
