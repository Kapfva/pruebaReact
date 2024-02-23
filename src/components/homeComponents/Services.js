import { distanceAndSkiddingToXY } from '@popperjs/core/lib/modifiers/offset';
import React from 'react';

import Section from '../layouts/Section';

import CardsServices from './CardsServices';

import '@styleHome/Services.css';

const Services = () => {
	return (
		<section name="Services">
			<div className="services " >
				<div className=" d-flex flex-column ">
					<div className="pt-5">
						<div className="pb-3">

							<Section
								title="Nuestros Servicios"
								desc="Proporcionamos información cuantitativa y cualitativa de la más alta calidad sobre procesos mineros y el uso de explosivos para fragmentación de rocas."
								style="white"
							>
								<div className="cards container-scroll pt-3" data-aos="fade-up" data-aos-easing="ease-in-sine">
									<CardsServices />
								</div>
							</Section>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
