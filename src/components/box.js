import styled from "styled-components";

const Box = styled.div`
	width: ${(pros) => (pros.width ? "100%" : "380px")};
	display: flex;
	flex-direction: column;
	gap: 12px;

	@media (max-width: 700px) {
		width: 100%;
	}
`;

export default Box;
