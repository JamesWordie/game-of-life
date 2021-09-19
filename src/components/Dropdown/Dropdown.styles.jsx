import styled from "styled-components";

// export const Wrapper = styled.form`
// 	display: flex;
// 	flex-flow: column;
// 	justify-content: flex-start;
// `;

// export const Select = styled.select`
// 	max-width: 50%;
// 	height: 100%;
// 	padding: 0.5rem;
// 	margin-bottom: 1rem;
// `;

// export const StyledOption = styled.option`
// 	color: ${(props) => (props.selected ? "lightgrey" : "black")};
// `;

// export const Label = styled.label`
// 	margin-bottom: 1rem;
// `;

// export const Button = styled.input`
// 	max-width: 50%;
// 	height: 100%;
// 	display: flex;
// 	justify-content: center;
// 	border: 1px solid black;
// 	border-radius: 1rem;
// `;

export const Wrapper = styled.div`
	margin: 0 auto;
	width: 10rem;
`;

export const Header = styled.div`
	padding: 0.5rem 1rem;
	width: 10rem;
	text-align: center;
	/* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15); */
	font-weight: 500;
	font-size: 1.1rem;
	&:hover {
		cursor: pointer;
	}
`;

export const Select = styled.div`
	position: absolute;
	z-index: 100;
	width: 10rem;
`;

export const DropdownList = styled.ul`
	padding: 0.5rem 1rem;
	margin: 0;
	text-align: center;
	background: #ffffff;
	border: 2px solid #e5e5e5;
	box-sizing: border-box;
	width: 12rem;
	font-size: 1.1rem;
	font-weight: 500;
`;

export const StyledOption = styled.li`
	list-style: none;
	padding: 0.5rem 1rem;
	&:hover {
		color: #3faffa;
	}
`;
