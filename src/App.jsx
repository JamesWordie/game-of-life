import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Styles
// import { GlobalStyle } from "./GlobalStyle";

// Containers
import Game from "./containers/Game/Game";
import Home from "./containers/Home/Home";

const App = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/game" component={Game} />
				</Switch>
				{/* <GlobalStyle /> */}
			</div>
		</Router>
	);
};

export default App;
