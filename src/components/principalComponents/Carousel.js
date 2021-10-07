import React from 'react';
import './Carousel.css';


const Carousel = () => {
	return (
		<div className="row">
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-ride="carousel"
			>
				<ol className="carousel-indicators">
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="0"
						className="active"
					></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="rojo d-flex align-items-center justify-content-center ">
							<h1>Yo funciono</h1>
						</div>
						{/* <img className="d-block w-100" src="..." alt="First slide"> */}
					</div>
					<div className="carousel-item">
						<div className="rojo d-flex align-items-center justify-content-center ">
							<h1>Yo fun</h1>
						</div>
						{/* <img className="d-block w-100" src="..." alt="Second slide"> */}
					</div>
					<div className="carousel-item">
						<div className="rojo d-flex align-items-center justify-content-center ">
							<h1>Yo funco</h1>
						</div>
						{/* <img className="d-block w-100" src="..." alt="Third slide"> */}
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleIndicators"
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

export default Carousel;