import styled from "styled-components";

const Row = styled.div`
	width: 100%;
	height: 80%;
	display: flex;
	flex-direction: row;
	gap: 6px;

	@media (max-width: 700px) {
		width: 100%;
	}
`;

export default Row;
