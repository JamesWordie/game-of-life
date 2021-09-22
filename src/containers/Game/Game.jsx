import React, { useState, useEffect } from "react";

// Components
import Grid from "../../components/Grid";
import Button from "../../components/Button";
import Span from "../../components/Span";
import Dropdown from "../../components/Dropdown";
import Alert from "../../components/Alert";

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
	const [ROWS, setRows] = useState(10);
	const [COLS, setCols] = useState(20);

	const [getInitialGrid] = useInitialGrid();

	// Render the initial grid onto the screen
	useEffect(() => {
		setGrid(getInitialGrid(ROWS, COLS));
	}, [ROWS, COLS]);

	// Play the game,
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
				if (counter === ROWS * COLS || generation === 300) {
					setRunning(false);
					setEquilibrium(true);
				}

				setGrid(next);
				// let life = generation + 1;
				setGeneration((prevState) => (prevState += 1));
			}, speed);

			return () => clearInterval(intervalId);
		}
	});

	// useEffect(() => {
	// 	if (!running || !equilibrium) {
	// 	}
	// });

	// handle the click on cell
	const handleCellClick = (e) => {
		console.log(e.target);
	};

	// Set running opposite to current
	const handleClick = () => {
		setRunning(!running);
	};

	// Reset the game
	const handleReset = () => {
		setRunning(false);
		setGeneration(0);
		setEquilibrium(false);
		setGrid(getInitialGrid(ROWS, COLS));
	};

	// Set the speed of evolution
	const handleSpeed = (e) => {
		const button = e.target.innerHTML;
		button.match(/(Slow)/) ? setSpeed(250) : setSpeed(50);
	};

	// Set the grid size
	const handleGrid = (option) => {
		switch (option) {
			case "20x10":
				setRows(10);
				setCols(20);
				break;
			case "30x15":
				setRows(15);
				setCols(30);
				break;
			case "40x20":
				setRows(20);
				setCols(40);
				break;
			default:
				break;
		}
	};

	return (
		<>
			<Span>
				<Button text={`${running ? "Pause" : "Start"}`} onClick={handleClick} />
				<Button text="Reset" onClick={handleReset} />
				<Button text="Evolution Speed - Slow" onClick={handleSpeed} />
				<Button text="Evolution Speed - Fast" onClick={handleSpeed} />
			</Span>
			<Span>
				<h3>Generation: {generation}</h3>
				<Dropdown handleGrid={handleGrid} />
			</Span>
			{generation >= 300 && (
				<Alert text="Reached an Oscillating Infinite State" />
			)}
			{equilibrium && generation < 300 && (
				<h3>Reached an Equilibrium State.</h3>
			)}
			<Grid grid={grid} handleCellClick={handleCellClick} />
		</>
	);
};

export default Game;
