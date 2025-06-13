import React from "react";

// Components
import Cell from "../Cell";

// Styles
import { Wrapper } from "./Grid.styles";

const Grid = (props) => {
	const { grid, handleCellClick } = props;
	return (
		<Wrapper>
			{grid.map((row, rowIndex) => {
				return (
					<div key={rowIndex}>
						{row.map((cell) => {
							const { row, col, state } = cell;
							return (
								<Cell
									key={`${rowIndex}-${cell.col}`}
									row={rowIndex}
									col={cell.col}
									state={cell.state}
									onCellClick={handleCellClick} // Pass the handler
								/>
							);
						})}
					</div>
				);
			})}
		</Wrapper>
	);
};

export default Grid;
