import React from "react";

// Styles
import { Wrapper, Content } from "./Span.styles";

const Span = ({ children }) => {
	return (
		<Wrapper>
			<Content>{children}</Content>
		</Wrapper>
	);
};

export default Span;
