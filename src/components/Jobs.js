import React from 'react';

import Article from './layouts/Article';

const Jobs = () => {
	return (
		<div>
			<Article title="Trabajos Realizados" imgUrl="pBanner.png">
				<div className="container">
					<embed
						src={'Experiencia Laboral PetroBlast S.A 2020.pdf'}
						type="application/pdf"
						width="100%"
						height="600px"
					/>
				</div>
			</Article>
		</div>
	);
};

export default Jobs;
