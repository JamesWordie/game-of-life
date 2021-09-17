import styled from "styled-components";

export const Wrapper = styled.div`
	width: 25px;
	height: 25px;
	display: inline-block;
	border: 0.1px solid black;
	padding: 1px;
	background-color: ${(props) => (props.state === 1 ? "#67db67" : "#faeaea")};
`;
