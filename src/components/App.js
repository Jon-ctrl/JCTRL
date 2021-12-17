import "./App.css"
import "./fonts/stylesheet.css"
import React from "react";
import Nav from "./nav";
import Home from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="body">
        <Router>
            <Nav />
            <Switch>
                <Route path="/" exact component={() => <Home />}/>
            </Switch>
        </Router>
    </div>
  )
}


export default App;