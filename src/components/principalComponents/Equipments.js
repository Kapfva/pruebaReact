import React from 'react';

import './Equipments.css';

const Equipments = () => {
	return (
		<div className="">
			<div className="text-center">
				<div className="container p-5 d-flex justify-content-center">
					<h1 className="title-black col-11 pt-5">
						Monitoreo y control de vibraciones con equipamiento de última generación
					</h1>
				</div>
				<div className="div-orange d-flex justify-content-center">
					<div className="col-6">
						<p className="text-center p-3">
							Equipamiento de control sísmico.
							<br /> Solo trabajamos con sismógrafos confiables, de fabricación alemana,
							canadiense y americana; especializados en voladuras o demoliciones. Y
							certificados en la casa matriz.
						</p>
					</div>
				</div>
				<div className="d-flex flex-row justify-content-center pt-5">
					<div id="instantel" className="col-4 d-flex flex-column m-4">
						<img src={'Instantel-Canada.png'}></img>
						<img src={'Picture10.png'}></img>
					</div>
					<div id="white" className="col-4 d-flex flex-column m-2">
						<img src={'USA.png'}></img>
						<img src={'Picture8.png'}></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Equipments;
