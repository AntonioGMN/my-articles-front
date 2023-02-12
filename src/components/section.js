import styled from "styled-components";

const Section = styled.section`
	min-height: 30vw;
	width: 60vw;
	padding: 12px;
	background-color: aliceblue;
	border-radius: 15px;
	height: 78vh;
	gap: 15px;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	/* /align-content: space-around; */

	overflow: auto;
	::-webkit-scrollbar {
		width: 16px;
		border: 1px solid white;
		border-radius: 15px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #b0b0b0;
		background-clip: padding-box;
		border: 1px solid #eeeeee;
		border-radius: 15px;
	}

	::-webkit-scrollbar-track {
		background-color: #bbbbbb;
		border-radius: 15px;
	}

	div {
	}

	@media (max-width: 700px) {
		width: 90%;
	}
`;

export default Section;
