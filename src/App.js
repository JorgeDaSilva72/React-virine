import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
const App = () => {


  return (
    <div>
		<Switch >
        <Route exact path="/" component={Home} />
        <Route path="/projet-1" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Redirect to='/' />
      </Switch>
	</div>
  );
};

export default App;
