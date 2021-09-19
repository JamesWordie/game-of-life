import React from "react";

// Styles
import { Wrapper, Content } from "./ButtonGrid.styles";

const ButtonGrid = ({ children }) => {
	return (
		<Wrapper>
			<Content>{children}</Content>
		</Wrapper>
	);
};

export default ButtonGrid;
