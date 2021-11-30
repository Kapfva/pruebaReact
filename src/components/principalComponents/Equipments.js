import React from 'react';

import './Equipments.css';

const Equipments = () => {
	return (
		<div className="">
			<div className="container d-flex justify-content-center flex-column">
				<h1 className="">
					Monitoreo y control de vibraciones con equipamiento de última generación
				</h1>
				<div className="d-flex flex-row justify-content-center">
					<div id="instantel" className="col-6 d-flex flex-column align-items-center">
						<img
							className="col-7 m-3"
							src={process.env.PUBLIC_URL + '/Instantel-Canada.png'}
							
						></img>
						<img src={process.env.PUBLIC_URL + '/Picture10.png'}></img>
					</div>
					<div id="white" className="col-6 d-flex flex-column align-items-center">
						<img className="col-7 m-3" src={process.env.PUBLIC_URL + '/USA.png'}></img>
						<img src={process.env.PUBLIC_URL + '/Picture8.png'}></img>
					</div>
				</div>
			</div>

			<div className="text-center">
				<div className="div-orange d-flex justify-content-center">
					<div className="col-6">
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
