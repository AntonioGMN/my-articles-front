import styled from "styled-components";

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: ${(props) => (props.top ? "flex-start" : "center")};
	align-items: center;
	min-height: 100vh;
	gap: 16px;
	padding: 1vw 0 1vw 0;

	@media (max-width: 700px) {
		width: 100%;
		gap: 15px;
	}
`;

export default Container;
