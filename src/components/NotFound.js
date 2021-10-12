import React from 'react';

import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

const NotFound = () => {
	return (
		<div>
			<Navbar />
			<div className=" content-page container">
				<h1>Lo sentimos, la página que buscas ha sido demolida.</h1>
			</div>

			<Footer />
		</div>
	);
};

export default NotFound;
