import React, { useState, useEffect } from "react";

// Components
import Grid from "../../components/Grid";
import Button from "../../components/Button";
import ButtonGrid from "../../components/ButtonGrid";

// Hooks
import { useInitialGrid } from "../../hooks/useInitialGrid";

// Helpers
import arrayClone from "../../helpers";

const Game = () => {
	const [grid, setGrid] = useState([]);
	const [running, setRunning] = useState(false);
	const [generation, setGeneration] = useState(0);
	const [equilibrium, setEquilibrium] = useState(false);
	const [speed, setSpeed] = useState(100);

	const ROWS = 10;
	const COLS = 20;

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
			}, speed);

			return () => clearInterval(intervalId);
		}
	});

	const handleClick = () => {
		setRunning(!running);
	};

	const handleReset = () => {
		setRunning(false);
		setGeneration(0);
		setEquilibrium(false);
		setGrid(getInitialGrid(ROWS, COLS));
	};

	const handleSpeed = (e) => {
		const button = e.target.innerHTML;
		button.match(/(Slow)/) ? setSpeed(250) : setSpeed(50);
	};

	return (
		<>
			<ButtonGrid>
				<Button text={`${running ? "Pause" : "Start"}`} onClick={handleClick} />
				<Button text="Reset" onClick={handleReset} />
				<Button text="Evolution Speed - Slow" onClick={handleSpeed} />
				<Button text="Evolution Speed - Fast" onClick={handleSpeed} />
			</ButtonGrid>
			<Grid grid={grid} />
			{generation}
			{equilibrium && <h3>Reached an Equilibrium State.</h3>}
		</>
	);
};

export default Game;
