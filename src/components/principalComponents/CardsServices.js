import React from 'react';
import Card from '../layouts/Card';

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




const CardsServices = () => {
	return (
		<div className="d-flex justify-content-center flex-wrap">
			<Card
				title="Voladuras a cielo abierto"
				desc="Diseño de voladuras. Medición de vibraciones y ruido generado por voladuras con aplicaciones como la explotación minera."
				imgUrl="/img-Services/pit(60ppi).png"
			/>
			<Card
				title="Voladuras subterráneas"
				desc="Diseño y medición de voladuras en obras subterráneas, como cavernas, túneles, galerias y pozos. Control de daño y entorno."
				imgUrl="/img-Services/tunel.png"
			/>
			<Card
				title="Control y monitoreo de vibraciones"
				desc="Control y monitoreo de vibraciones generadas por tráfico vehicular, trenes u obras dentro de la ciudad."
				imgUrl="/img-Services/tren.png"
			/>
			<Card
				title="Monitoreo de ruido"
				desc="Monitoreo de ondas sonoras generadas por tráfico y construcciones."
				imgUrl="/img-Services/ruido.png"
			/>
			<Card
				title="Aplicación de normativas "
				desc="Asistencia en el uso de normativas para el análisis de vibraciones y control sísmico en voladura de rocas."
				imgUrl="/img-Services/norma.png"
			/>
			{/* <Card
										title="Exploración sísmica"
										desc="Exploración sísmica para búsqueda de aguas y petróleo."
										imgUrl="/img-Services/logo_petroblast.png"
									/> */}
		</div>
	);
};

export default CardsServices;
