import { distanceAndSkiddingToXY } from '@popperjs/core/lib/modifiers/offset';
import React from 'react';

import Section from '../layouts/Section';
import Equipments from './Equipments';

import CardsServices from './CardsServices';

import './Services.css';

const Services = () => {
	return (
		<section name="Services">
			<div className="services ">
				<div className=" d-flex flex-column ">
					<div className="pt-5">
						<div className="back-gray pb-3">
							<Section
								title="Nuestros Servicios"
								desc="Proporcionamos información cuantitativa y cualitativa de la más alta calidad sobre procesos mineros y el uso de explosivos para fragmentación de rocas."
								style="white"
							>
								<div className="cards container-scroll ">
									<CardsServices/>
								</div>
							</Section>
						</div>

						<Equipments />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
