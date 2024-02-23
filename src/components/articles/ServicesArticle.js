import React from "react";

import Article from "../layouts/Article";

import CardsServices from "../homeComponents/CardsServices";
import Equipments from "../homeComponents/Equipments";

const ServicesArticle = () => {
	return (
		<Article
			title="Servicios"
			imgUrl="serv-ban.webp"
			style="gray"
		>
			<div className="back-grayLight p-5">
				<div className="container">
					<div className=" col-6 p-3">
						<h2>Medición de vibraciones y ruido generadas por voladuras</h2>
						<img src=""></img>
						<li type="square">Diseño y simulación de mallas.</li>
						Instrumentación, medición y control de vibraciones terrestres
						(mm/s), onda de sobrepresión, ruidos (dB) y velocidad de detonación
						VOD (m/s). Comparación con Normativas nacionales e internacionales,
						umbral de daño: Colombiana NSR-98, Americana USBM RI 8507, Alemana
						DIN4150, Española UNE 22-381-93, entre otras. Software de simulación
						y diseño de voladuras, análisis de velocidad de la partícula pico,
						PPV (mm/s). General, Análisis y control de vibraciones - onda de
						sobrepresión por voladura de rocas, demoliciones, tráfico de
						vehículos y paso de oleoductos.
					</div>
					<div className=" col-6 p-3">
						<h2>Diseño de voladuras</h2>
					</div>
					<div className="back-orange p-3 mb-2">
						<div className="col-6"></div>
						<h2>Diseño de voladuras</h2>
						<ul>
							<li type="square">Diseño y simulación de mallas.</li>
							<li type="square">Predicción de fracturamiento en el macizo.</li>
							<li type="square">Medida de fragmentación.</li>
							<li type="square">Acoplamiento entre barrenos.</li>
							<li type="square">Retardos en el fondo del barreno.</li>
							<li type="square">Retardos en superficie.</li>
							<li type="square">Tipos de explosivos.</li>
						</ul>
						<img src="/P1040043.webp"></img>
					</div>
				</div>
			</div>
		</Article>
	);
};

export default ServicesArticle;
