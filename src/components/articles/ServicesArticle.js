import React from 'react';

import Article from '../layouts/Article';

import CardsServices from '../principalComponents/CardsServices';

const ServicesArticle = () => {
	return (
		<Article title="Servicios" imgUrl="pBanner.png">
			<CardsServices />
		</Article>
	);
};

export default ServicesArticle;
