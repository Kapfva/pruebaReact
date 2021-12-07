import React from 'react';
import Card from '../layouts/Card';

var data = [
	{
		id: '1',
		title: 'Voladuras a cielo abierto',
		desc: 'Diseño de voladuras. Medición de vibraciones y ruido generado por voladuras con aplicaciones como la explotación minera.',
		imgUrl: '/img-Services/pit(60ppi).png',
	},
	{
		id: '2',
		title: 'Voladuras  subterráneas',
		desc: 'Diseño y medición de voladuras en obras subterráneas, como cavernas, túneles, galerias y pozos. Control de daño y entorno.',
		imgUrl: '/img-Services/tunel.png',
	},
	{
		id: '3',
		title: 'Control y monitoreo de vibraciones',
		desc: 'Control y monitoreo de vibraciones generadas por tráfico vehicular, trenes u obras dentro de la ciudad.',
		imgUrl: '/img-Services/tren.png',
	},
	{
		id: '4',
		title: 'Monitoreo de ruido',
		desc: 'Monitoreo de ondas sonoras generadas por tráfico y construcciones.',
		imgUrl: '/img-Services/ruido.png',
	},
	{
		id: '5',
		title: 'Aplicación de normativas',
		desc: 'Asistencia en el uso de normativas para el análisis de vibraciones y control sísmico en voladura de rocas.',
		imgUrl: '/img-Services/norma.png',
	},
];

const createCard = data.map((card) => (
	<Card title={card.title} desc={card.desc} imgUrl={card.imgUrl}  key={card.id} style="white"/>
));

const CardsServices = () => {
	return <div className="d-flex justify-content-center flex-wrap">{createCard}</div>;
};

export default CardsServices;
