import React from 'react';

import Article from './layouts/Article';

// document.oncontextmenu = function(){return false}

const Jobs = () => {
	return (
		<div>
			<Article title="Trabajos Realizados" imgUrl="pBanner.png">
				<div className="container">
					<embed
						src={'Experiencia Laboral PetroBlast S.A 2020.pdf#toolbar=0'}
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
