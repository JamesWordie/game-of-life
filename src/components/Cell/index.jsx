import React from "react";

// Styles
import { Wrapper } from "./Cell.styles";

const Cell = ({ state, row, col, onCellClick }) => {
	const living = state === 1 ? "alive" : "dead";

	return (
		<Wrapper
			id={`cell-${row}-${col}`}
			state={state}
			className={living}
			onClick={() => onCellClick && onCellClick(row, col)}
		></Wrapper>
	);
};

export default Cell;
