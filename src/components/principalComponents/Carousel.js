import React from 'react';
import './Carousel.css';
// var Carousel = ReactBootstrap.Carousel;
import  CarouselInner  from "./CarouselInner";

const Carouselprincipal = () => {
	return (
		<div className="row">
			<div
				id="carouselExampleFade"
				className="carousel slide carousel-fade"
				data-ride="carousel"
			>
				<CarouselInner/>
				<a
					className="carousel-control-prev"
					href="#carouselExampleFade"
					role="button"
					data-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleFade"
					role="button"
					data-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
};

export default Carouselprincipal;
