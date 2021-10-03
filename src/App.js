import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Componentes
import Home from "./components/Home";

const App = () => {
    return (
        <Router className="App__container">
            <Switch>
                {/* <Route exact path="/">
                    <Home />
                </Route> */}
                <Route exact path={'/'} component={Home}/>|
                {/* <Route path={'/add'} component={Add}/>|
                <Route path={'/edit/:id'} component={Edit}/>| */}
            </Switch>
        </Router>
    );
};

export default App;
