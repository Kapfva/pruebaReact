import React from 'react';

import Carousel from './principalComponents/Carousel';
import BannerP from './principalComponents/BannerP';
import AboutUs from './principalComponents/AboutUs';
import Services from './principalComponents/Services';
import Contact from './principalComponents/Contact';



const Home = () => {
	return (
		<div className="">
			
			{/* <Carousel /> */}
			<BannerP />
			<div className="app">
				<AboutUs />
				<Services />
				<Contact/>
			</div>

			
		</div>
	);
};

export default Home;
