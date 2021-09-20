import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./components/Banner";

// Styles
import { GlobalStyle } from "./GlobalStyle";

// Containers
import Game from "./containers/Game/Game";
import Home from "./containers/Home/Home";

const App = () => {
	return (
		<Router>
			<div>
				<Banner text="The Game of Life" />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/game" component={Game} />
				</Switch>
				<GlobalStyle />
			</div>
		</Router>
	);
};

export default App;
