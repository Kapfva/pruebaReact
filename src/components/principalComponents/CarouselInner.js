import React from 'react';

import Slide from '../layouts/Slide';

const CarouselInner = () => {
	return (
		<div className="carousel-inner">
			<div className="carousel-item active">
				<Slide title="Voladuras a cielo abierto" numSlide="1">
					Nos especializamos en perforación y voladuras de rocas, con énfasis en técnicas
					de voladura para obras civiles y militares.
				</Slide>
			</div>
			<div className="carousel-item">
				<Slide title="Voladuras  subterráneas" numSlide="2">
					Somos expertos en el diseño de voladuras subterráneas. Estamos especializados
					en el control y análisis de vibraciones en voladuras subterráneas y en pit.
				</Slide>
			</div>
			<div className="carousel-item">
				<Slide title="Vibraciones por tráfico vehicular y trenes" numSlide="3">
					Tenemos una amplia experiencia en la medición de vibraciones y ruido causados
					por tráfico en zonas residenciales.
				</Slide>
			</div>
		</div>
	);
};

export default CarouselInner;
