import React from "react";

import Carousel from "./homeComponents/Carousel";
import BannerP from "./homeComponents/BannerP";
import AboutUs from "./homeComponents/AboutUs";
import Services from "./homeComponents/Services";
import Equipments from "./homeComponents/Equipments";
import Contact from "./homeComponents/Contact";

const Home = () => {
	return (
		<div className="">
			{/* <Carousel /> */}
			<BannerP />
			<div className="app">
				<Equipments />
				<AboutUs />
				<Services />

				{/* <Contact/> */}
			</div>
		</div>
	);
};

export default Home;
