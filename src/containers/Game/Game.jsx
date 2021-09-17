import React, { useState, useEffect } from "react";
import Button from "../../components/Button";

// Components
import Grid from "../../components/Grid";

// Hooks
import { useInitialGrid } from "../../hooks/useInitialGrid";

const Game = () => {
	const [grid, setGrid] = useState([]);
	const [running, setRunning] = useState(false);
	const [previousGrid, setPreviousGrid] = useState();

	const ROWS = 10;
	const COLS = 10;

	const [getInitialGrid] = useInitialGrid();
	// const runGame = useRunGame;

	// Render the initial grid onto the screen
	useEffect(() => {
		const initialGrid = getInitialGrid(ROWS, COLS);
		setGrid(initialGrid);
		setPreviousGrid(initialGrid);
	}, []);

	useEffect(() => {
		if (grid.length === 0) return;
		// const nextGrid = getInitialGrid(ROWS, COLS);

		if (running) {
			const next = getInitialGrid(ROWS, COLS);

			const countNeighbours = (grid, x, y) => {
				let sum = 0;
				for (let i = -1; i < 2; i++) {
					for (let j = -1; j < 2; j++) {
						let col = (x + i + COLS) % COLS;
						let row = (y + j + ROWS) % ROWS;

						sum += grid[col][row].state;
					}
				}
				sum -= grid[x][y].state;
				return sum;
			};

			for (let i = 0; i < ROWS; i++) {
				for (let j = 0; j < COLS; j++) {
					let state = grid[i][j].state;
					let neighbours = countNeighbours(grid, i, j);
					if (state === 0 && neighbours === 3) {
						next[i][j].state = 1;
					} else if (state === 1 && (neighbours < 2 || neighbours > 3)) {
						next[i][j].state = 0;
					} else {
						next[i][j].state = state;
					}
				}
			}

			setPreviousGrid(grid);
			setGrid(next);

			let currentCount;
			let previousCount;
			for (let i = 0; i < ROWS; i++) {
				for (let j = 0; j < COLS; j++) {
					console.log(next[i][j]);
					currentCount += next[i][j].state;
					previousCount += grid[i][j].state;
				}
			}
			// console.log("current", currentCount);
			// console.log("previous", previousCount);
			if (currentCount === previousCount) {
				setRunning(false);
			}
		}
	});

	const handleClick = () => {
		setRunning(!running);
	};

	return (
		<>
			<Button text={`${running ? "Stop" : "Start"}`} onClick={handleClick} />
			<Grid grid={grid} />
		</>
	);
};

export default Game;
