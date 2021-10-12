import React from 'react';
import Section from '../layouts/Section';

import './AboutUs.css';

const numImg = [];

for (var i = 1; i < 5; i++) {
	numImg.push(<div><img src={process.env.PUBLIC_URL + '/about/' + i + '.png'}></img></div>);
}

const AboutUs = () => {
	return (
		<section id="About">
			<div className=" d-flex flex-row align-items-center img-about"> 
			{numImg}
			
			</div>
			<Section
				title="¿Quiénes somos?"
				desc="Proporcionamos información cualitativa y cuantitativa de la más alta calidad sobre procesos mineros y el uso de explosivos para fragmentación de rocas."
			>
				<div className="pl-5 pr-5 p-3">
					<div className="row">
						<div className="col-6">
							<div className=" d-flex flex-row align-items-center">
								<h1 className="title-section">+20</h1>
								<p className="col-9">Años de experiencia en ingeniería minera, geológica y geofísica.</p>
							</div>
						</div>
						<div className="col-6">
							<div className="row">
							<i className="fas fa-hard-hat"></i>
								<p>
									Personal capacitado, certificado y especializado en disciplinas afines
									a proyectos de monitoreo de vibraciones.
								</p>
							</div>
						</div>
					</div>
					<div className="">
						<button className=" button-orange">Ver más</button>
					</div>
				</div>
			</Section>
		</section>
	);
};

export default AboutUs;
