import React from "react";

// Styles
import { Wrapper } from "./Cell.styles";

const Cell = ({ row, col, state }) => {
	const living = state === 1 ? "alive" : "dead";
	return (
		<Wrapper
			id={`cell-${row}-${col}`}
			state={state}
			className={living}
		></Wrapper>
	);
};

export default Cell;
