import React, { useState, useEffect } from "react";
import Button from "../../components/Button";

// Components
import Grid from "../../components/Grid";

// Hooks
import { useInitialGrid } from "../../hooks/useInitialGrid";

// Helpers
import arrayClone from "../../helpers";

const Game = () => {
	const [grid, setGrid] = useState([]);
	const [running, setRunning] = useState(false);
	const [generation, setGeneration] = useState(0);
	const [equilibrium, setEquilibrium] = useState(false);

	const ROWS = 10;
	const COLS = 20;
	const SPEED = 100;

	const [getInitialGrid] = useInitialGrid();
	// const runGame = useRunGame;

	// Render the initial grid onto the screen
	useEffect(() => {
		const initialGrid = getInitialGrid(ROWS, COLS);
		setGrid(initialGrid);
	}, []);

	useEffect(() => {
		if (running) {
			let intervalId = setInterval(() => {
				const next = arrayClone(grid);

				const countNeighbours = (grid, x, y) => {
					let sum = 0;
					for (let i = -1; i < 2; i++) {
						for (let j = -1; j < 2; j++) {
							let row = (x + i + ROWS) % ROWS;
							let col = (y + j + COLS) % COLS;

							sum += grid[row][col].state;
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

				let counter = 0;
				for (let i = 0; i < ROWS; i++) {
					for (let j = 0; j < COLS; j++) {
						if (grid[i][j].state === next[i][j].state) {
							counter += 1;
						}
					}
				}
				if (counter === ROWS * COLS) {
					setRunning(false);
					setEquilibrium(true);
				}

				setGrid(next);
				let life = generation + 1;
				setGeneration(life);
			}, SPEED);

			return () => clearInterval(intervalId);
		}
	});

	const handleClick = () => {
		setRunning(!running);
	};

	return (
		<>
			<Button text={`${running ? "Pause" : "Start"}`} onClick={handleClick} />
			<Grid grid={grid} />
			{generation}
			{equilibrium && <h3>Reached an Equilibrium State.</h3>}
		</>
	);
};

export default Game;
