import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

// Componentes
import Home from './components/Home';
import NotFound from './components/NotFound';
import Jobs from './components/Jobs';
import About from './components/articles/AboutUsArticle';
import ServicesArticle from './components/articles/ServicesArticle';
import ContactArticle from './components/articles/ContactArticle';

// const style ={
// 	"background-image": "url("+process.env.PUBLIC_URL + '/rejilla.png'+")",
// };

// Animations
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	});
	return (
		<Router className="App__container">
			<Navbar />
			<Switch>
				<Route exact path={'/'} component={Home} />
				<Route exact path={'/prueba'} component={NotFound} />
				<Route exact path={'/404'} component={NotFound} />

				<Route exact path={'/about'} component={About} />
				{/* <Route exact path={'/jobs'} component={Jobs} /> */}
				<Route exact path={'/services'} component={ServicesArticle} />
				{/* <Route exact path={'/contact'} component={ContactArticle} /> */}

				{/* <Route exact path={'/about'} component={NotFound} />  */}
				<Route exact path={'/jobs'} component={NotFound} />
				{/* <Route exact path={'/services'} component={NotFound} /> */}
				<Route exact path={'/contact'} component={NotFound} />
				<Route path="*" component={NotFound} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
