// export const useRunGame = ({ grid, rows, cols }) => {
// 	const nextGrid = grid;

// 	const countNeighbours = (grid, x, y) => {
// 		let sum = 0;
// 		for (let i = -1; i < 2; i++) {
// 			for (let j = -1; j < 2; j++) {
// 				let col = (x + i + cols) % cols;
// 				let row = (y + j + rows) % rows;
// 				sum += grid[col][row];
// 			}
// 		}
// 		sum -= grid[x][y];
// 		return sum;
// 	};

// 	for (let i = 0; i < cols; i++) {
// 		for (let j = 0; j < rows; j++) {
// 			let state = grid[i][j];
// 			console.log(state);

// 			let neighbours = countNeighbours(grid, i, j);

// 			if (state === 0 && neighbours === 3) {
// 				nextGrid[i][j] = 1;
// 			} else if (state === 1 && (neighbours < 2 || neighbours > 3)) {
// 				nextGrid[i][j] = 0;
// 			} else {
// 				nextGrid[i][j] = state;
// 			}
// 		}
// 	}

// 	return nextGrid;
// };
