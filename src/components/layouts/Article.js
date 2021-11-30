import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import './Article.css';
import CardOnlyDesc from './CardOnlyDesc';

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

const createRecommendationCard = data.map((rec) => (
	<div className="" key={rec.id}>
		<CardOnlyDesc title={rec.title} numSlide={rec.id}>
			{rec.desc}
		</CardOnlyDesc>
	</div>
));

const Article = ({ title, children, imgUrl }) => {
	return (
		<div className="">
			<div className="top-banner d-flex align-items-center">
				<img className="img-opaque img-banner img-fluid" src={imgUrl}></img>
				
					<div className="title-banner p-5 pt-5 pb-1">
						<h1 className="title-white pt-4">{title}</h1>
						<hr className="separator separator-orange" />
					</div>
				
			</div>
			<div className="content-page">
				<div className="content-article">{children}</div>
			</div>
			<div id="recommended">
				{createRecommendationCard}
			</div>
		</div>
	);
};

export default Article;
