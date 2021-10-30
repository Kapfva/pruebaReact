import React from 'react';
import Link from 'react-router-dom';


import Article from '../layouts/Article';
import Equipments from '../principalComponents/Equipments';

const AboutUsArticle = () => {
	return (
		<Article title="¿Quiénes somos?">
			<div className="back-gray">
                <Equipments/>
            </div>
		</Article>
	);
};

export default AboutUsArticle;
