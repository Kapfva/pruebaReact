import React from 'react';
import './Carousel.css';
// var Carousel = ReactBootstrap.Carousel;

const Carouselprincipal = () => {
	return (
		<div className="row">
			<div
				id="carouselExampleFade"
				className="carousel slide carousel-fade"
				data-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						{/* <img src="..." className="d-block w-100" alt="..."> */}
						<div className="verde d-flex align-items-center justify-content-center">
							egufgsh
						</div>
					</div>
					<div className="carousel-item">
						<div className="rojo d-flex align-items-center justify-content-center">
							egufgsh
						</div>
						{/* <img src="..." className="d-block w-100" alt="..."> */}
					</div>
					<div className="carousel-item">
						<div className="amarillo align-items-center justify-content-center">
							egufgsh
						</div>
						{/* <img src="..." className="d-block w-100" alt="..."> */}
					</div>
				</div>
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
