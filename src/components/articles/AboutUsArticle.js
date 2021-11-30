import React from 'react';
import Link from 'react-router-dom';

import Article from '../layouts/Article';

const AboutUsArticle = () => {
	return (
		<Article title="¿Quiénes somos?" imgUrl={process.env.PUBLIC_URL + 'pBanner.png'}>
			<div className="back-gray">
				<div className="container d-flex flex-column">
					<div className="d-flex flex-row" id="History">
						<div className="col-6">
							<img className="img-responsive" src="public\20170831_124536.png" />
						</div>
						<div className="col-6">
							<h1>Historia</h1>
							<p>
								Somos una empresa colombiana con más de 20 años de experiencia en el
								monitoreo, análisis y asesoría en el área de vibraciones. Nos
								especializamos en el manejo de tecnología de punta en el área. Definimos
								nuestro actuar con base a la excelencia, enfocando nuestros esfuerzos en
								la sana competencia, la honestidad y el espíritu de investigación e
								innovación.
							</p>
						</div>
					</div>
					<div className="d-flex flex-row" id="Mission">
						<div className="col-6">
							<h2>Misión</h2>
							<p>
								Nuestra misión se encuentra centrada en ofrecer servicios de calidad en
								nuestra área de trabajo que permitan brindar a la comunidad información
								reelevante sobre el campo minero-energético, teniendo en cuenta
								normativas especializadas y avaladas tanto nacional, como
								internacionalmente.
							</p>
						</div>
						<div className="col-6">
							<img className="img-responsive" src="public\20170831_124536.png" />
						</div>
					</div>
					<div className="d-flex flex-row" id="Vission">
						<div className="col-6">
							<img className="img-responsive" src="public\20170831_124536.png" />
						</div>
						<div className="col-6">
							<h2>Visión</h2>
							<p>
								Nos proyectamos a futuro como una empresa íntegra dedicada a la
								investigación de el área minero-energética, recnocida tanto nacional como
								internacionalemnte como un referente.s
							</p>
						</div>
					</div>
					<div className="d-flex flex-row" id="logo">
						<div className="col-6">
							<h1>Logo</h1>
							<p>
								A través de años de trabajo hemos participado en múltiples obras, que van
								desde sondeos hasta mega obras por todo el país. Nuestra razón social ha
								experimentado múltiples cambios desde entonces, al igual que nuestro logo
							</p>
						</div>
						<div className="col-6">
							<img className="img-responsive" src="public\20170831_124536.png" />
						</div>
					</div>
				</div>
			</div>
		</Article>
	);
};

export default AboutUsArticle;
