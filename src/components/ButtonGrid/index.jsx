import React from "react";

// Styles
import { Wrapper, Content } from "./ButtonGrid.styles";

// Components
import Dropdown from "../Dropdown";

const ButtonGrid = ({ children }) => {
	return (
		<Wrapper>
			<Content>
				{children}
				<Dropdown />
			</Content>
		</Wrapper>
	);
};

export default ButtonGrid;
