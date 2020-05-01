import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Frontpage from "./components/Frontpage/Frontpage";

const App = () => {
	return (
		<Router>
			<Route path="/" exact component={Frontpage} />
		</Router>
	);
};

export default App;
