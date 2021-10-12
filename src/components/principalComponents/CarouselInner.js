import React from 'react';

import Slide from '../layouts/Slide';

var data = [
	{
		id: '1',
		title: 'Voladuras a cielo abierto',
		desc: 'Nos especializamos en perforación y voladuras de rocas, con énfasis en técnicas de voladura para obras civiles y militares.',
	},
	{
		id: '2',
		title: 'Voladuras  subterráneas',
		desc: 'Somos expertos en el diseño de voladuras subterráneas. Estamos especializados en el control y análisis de vibraciones en voladuras subterráneas y en pit.',
	},
	{
		id: '3',
		title: 'Vibraciones por tráfico vehicular y trenes',
		desc: 'Tenemos una amplia experiencia en la medición de vibraciones y ruido causados por tráfico en zonas residenciales.',
	},
	{
		id: '4',
		title: 'Exploración sísmica por minivibros',
		desc: 'Trabajamos en  la exploración sísmica de petróleo haciendo uso de explosivos, vibros y minivibros.',
	},
	{
		id: '5',
		title: 'Vibraciones por obras de infrastructura',
		desc: 'Proveemos el análisis  e interpretación de registros sísmicos en obras como demoliciones o presas.',
	},
	{
		id: '6',
		title: 'Software de voladuras',
		desc: 'Estamos ampliamente capacitados en el uso de software para el diseño, control y medición de voladuras como JK Simblast, DNA Blast, entre otros.',
	}
];


const createSlide = data.map((slide) => (
	<div className={ slide.id == 1 ? 'carousel-item active' :'carousel-item'} key={slide.id}>
		<Slide title={slide.title} numSlide={slide.id}>
			{slide.desc}
		</Slide>
	</div>
));

const CarouselInner = () => {
	return (
		<div className="carousel-inner">
			{createSlide}
		</div>
	);
};

export default CarouselInner;
