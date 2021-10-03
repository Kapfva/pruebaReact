import React from "react";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

import Carousel from "./principalComponents/Carousel";
import AboutUs from "./principalComponents/AboutUs";
import Services from "./principalComponents/Services";
import Equipments from "./principalComponents/Equipments";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Carousel />
                <AboutUs />
                <Services />
                <Equipments />
            </div>

            <Footer />
        </div>
    );
};

export default Home;
