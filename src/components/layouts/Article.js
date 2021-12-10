import React from 'react';

import './Article.css';
import Slide from '../layouts/Slide';
import Card from './Card';

var data = [
	{
		id: '1',
		title: 'Voladuras a cielo abierto',
		desc: 'Diseño de voladuras. Medición de vibraciones y ruido generado por voladuras con aplicaciones como la explotación minera.',
		imgUrl: '/img-Services/pit(60ppi).webp',
	},
	{
		id: '2',
		title: 'Voladuras  subterráneas',
		desc: 'Diseño y medición de voladuras en obras subterráneas, como cavernas, túneles, galerias y pozos. Control de daño y entorno.',
		imgUrl: '/img-Services/tunel.webp',
	},
	{
		id: '3',
		title: 'Control y monitoreo de vibraciones',
		desc: 'Control y monitoreo de vibraciones generadas por tráfico vehicular, trenes u obras dentro de la ciudad.',
		imgUrl: '/img-Services/tren.webp',
	},
	{
		id: '4',
		title: 'Monitoreo de ruido',
		desc: 'Monitoreo de ondas sonoras generadas por tráfico y construcciones.',
		imgUrl: '/img-Services/ruido.webp',
	},
	{
		id: '5',
		title: 'Aplicación de normativas',
		desc: 'Asistencia en el uso de normativas para el análisis de vibraciones y control sísmico en voladura de rocas.',
		imgUrl: '/img-Services/norma.webp',
	},
];

const createRecommendedCard = data.map((card) => (
	<Card title={card.title } desc={card.desc} imgUrl={card.imgUrl} style="gray" key={card.id}/>
));

const Article = ({ title, children, imgUrl, style }) => {
	return (
		<div className="content-page">
			<div className="top-banner d-flex align-items-center">
				<img className="img-opaque img-banner img-fluid" src={imgUrl}></img>

				<div className="banner-article offset-1 d-flex flex-column text-center">
					<h1 className="title-article-white pt-4">{title}</h1>
					<hr
						className={
							style == 'gray'
								? 'separator separator-white-large'
								: 'separator separator-orange-large'
						}
					/>
				</div>
			</div>
			<div className="content-page p-2 ">
				<div className="content-article pt-4 ">{children}</div>
				<div className="py-5">
					<div className="back-grayLight">
						<div className="container pt-5" id="recommended">
							<h1>Artículos relacionados</h1>
							<div className="d-flex flex-row flex-wrap ">{createRecommendedCard}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;
