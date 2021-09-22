import React from "react";

// Styles
import { Wrapper } from "./Cell.styles";

const Cell = ({ row, col, state, handleCellClick }) => {
	const living = state === 1 ? "alive" : "dead";

	const handleClick = (e) => {
		console.log(e);
		handleCellClick(e);
	};

	return (
		<Wrapper
			id={`cell-${row}-${col}`}
			state={state}
			className={living}
			onClick={() => handleClick}
		></Wrapper>
	);
};

export default Cell;
