import styled from "styled-components";

const Row = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	@media (max-width: 700px) {
		width: 100%;
	}
`;

export default Row;
