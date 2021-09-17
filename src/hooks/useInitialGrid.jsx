export const useInitialGrid = () => {
	const getGrid = (rows, cols) => {
		const grid = [];
		for (let i = 0; i < rows; i++) {
			const row = [];
			for (let j = 0; j < cols; j++) {
				row.push(cellProps(i, j));
			}
			grid.push(row);
		}
		return grid;
	};

	const startingState = () => {
		return Math.floor(Math.random() * 2);
	};

	const cellProps = (row, col) => ({
		row: row,
		col: col,
		state: startingState(),
	});

	return [getGrid];
};
