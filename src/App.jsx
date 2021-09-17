import React from "react";
import { Route, Switch } from "react-router";

// Containers
import Game from "./containers/Game/Game";
import Home from "./containers/Home/Home";

const App = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/game" component={Game} />
		</Switch>
	);
};

export default App;
