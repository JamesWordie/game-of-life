import React from "react";

// Styles
import { Wrapper, Content } from "./Banner.styles";

const Banner = ({ text }) => {
	return (
		<Wrapper>
			<Content>{text}</Content>
		</Wrapper>
	);
};

export default Banner;
