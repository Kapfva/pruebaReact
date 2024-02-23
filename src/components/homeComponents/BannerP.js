import React from 'react';

import '@styleHome/BannerP.css';

var imgRandom = Math.floor(Math.random() * (5 - 1)) + 1;

const BannerP = () => {
	return (
		<div className="bannerP">
			<div className="pt-5 d-flex align-items-end justify-content-center">
				<img
					className="img-opaque img-flex-inverse"
					src={'/Img-Slides/' + imgRandom + '.webp'}
				></img>
			</div>

			<div className="caption p-5 offset-1 col-6 d-flex align-items-center justify-content-center flex-column col-auto" >
				
				<div className="animate__animated animate__fadeInLeft">
					<h1 className="title title-orange">Voladuras a cielo abierto y subterráneas</h1>
					<p className="white-text">
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
