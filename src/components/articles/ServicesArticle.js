import React from 'react';

import Article from '../layouts/Article';


import CardsServices from '../principalComponents/CardsServices';
import Equipments from '../principalComponents/Equipments';


const ServicesArticle = () => {
	return (
		<Article title="Servicios" imgUrl="serv-ban.png" style="gray">
			<Equipments />
			<CardsServices />
		</Article>
	);
};

export default ServicesArticle;
