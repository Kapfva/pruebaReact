import React from 'react';

import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

import Carousel from './principalComponents/Carousel';
import BannerP from './principalComponents/BannerP';
import AboutUs from './principalComponents/AboutUs';
import Services from './principalComponents/Services';

const Home = () => {
	return (
		<div>
			<Navbar />
			{/* <Carousel /> */}
			<BannerP />
			<div className="app">
				<AboutUs />
				<Services />
			</div>

			<Footer />
		</div>
	);
};

export default Home;
