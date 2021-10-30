import React from 'react';
import Card from '../layouts/Card';
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
