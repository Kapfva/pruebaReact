import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

// Componentes
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Jobs from "./components/Jobs";
import About from "./components/articles/AboutUsArticle";
import ServicesArticle  from "./components/articles/ServicesArticle";


const App = () => {
    return (
        <Router className="App__container ">
        <Navbar />
            <Switch>
                {/* <Route exact path="/">
                    <Home />
                </Route> */}
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/prueba'} component={NotFound}/>
                <Route exact path={'/jobs'} component={Jobs}/>
                <Route exact path={'/about'} component={About}/>
                <Route exact path={'/services'} component={ServicesArticle}/>

                <Route path="*" component={NotFound}/>
                {/* <Route path={'/add'} component={Add}/>|
                <Route path={'/edit/:id'} component={Edit}/>| */}
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
