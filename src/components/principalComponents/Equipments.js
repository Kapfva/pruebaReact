import React from 'react';

import './Equipments.css';

const Equipments = () => {
	return (
		<div className=" back-grayLight pt-5" data-aos="fade-up" data-aos-easing="ease-in-sine">
			<div className="container d-flex justify-content-center flex-column">
				<h1 className="title-max text-center">
					Monitoreo y control de vibraciones con equipamiento de última generación
				</h1>
				<div className="d-flex justify-content-center flex-wrap p-5">
					<div id="instantel" className="col d-flex flex-column align-items-center ">
						<img
							className="col-7 m-3"
							src={process.env.PUBLIC_URL + '/Instantel-Canada.webp'}
							
						></img>
						<img src={process.env.PUBLIC_URL + '/Picture10.webp'}></img>
					</div>
					<div id="white" className="col d-flex flex-column align-items-center">
						<img className="col-7 m-3" src={process.env.PUBLIC_URL + '/USA.webp'}></img>
						<img src={process.env.PUBLIC_URL + '/Picture8.webp'}></img>
					</div>
				</div>
			</div>

			<div className="text-center">
				<div className="div-orange d-flex justify-content-center">
					<div className="col">
						<p className="text-center p-3">
							Equipamiento de control sísmico.
							<br /> Solo trabajamos con sismógrafos confiables, de fabricación alemana,
							canadiense y americana; especializados en voladuras o demoliciones y
							certificados en la casa matriz.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Equipments;
