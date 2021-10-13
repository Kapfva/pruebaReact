import React from 'react';

import './BannerP.css';

var imgRandom = Math.floor(Math.random() * (5 - 1)) + 1;

const BannerP = () => {
	return (
		<div className="bannerP">
			<div className="image-banner d-flex w-100">
				<img
					className="img-opaque align-self-end"
					src={'/Img-Slides/' + imgRandom + '.png'}
				></img>
			</div>

			<div className="caption offset-1 col-6 d-flex align-items-center justify-content-center flex-column">
				<div>
					<h1 className="title ">Voladuras a cielo abierto y subterráneas</h1>
					<p className="subtitle">
						Equipo especializado en perforación y diseño de voladuras de rocas, con
						énfasis en técnicas de voladura para obras a cielo abierto y subterráneas;
						implementando métodos como <b>Open Pit</b> . Ofrecemos servicios de análisis
						y monitoreo de vibraciones con la mejor calidad.
					</p>
					<div className="d-flex align-items-left">
						<button className=" button-orange ">Ver más</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerP;
