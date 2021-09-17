import React from "react";

// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ text, onClick }) => {
	return (
		<Wrapper type="button" onClick={onClick}>
			{text}
		</Wrapper>
	);
};

export default Button;
