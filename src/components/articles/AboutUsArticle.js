import React from 'react';
import Link from 'react-router-dom';

import Article from '../layouts/Article';

var data = [
	{
		id: '1',
		alt: '',
		imgUrl: '/img-about/aboutArticle/Picture1.webp',
	},
	{
		id: '2',
		alt: '',
		imgUrl: '/img-about/aboutArticle/Picture2.webp',
	},
	{
		id: '3',
		alt: '',
		imgUrl: '/img-about/aboutArticle/Picture3.webp',
	},
	{
		id: '4',
		alt: '',
		imgUrl: '/img-about/aboutArticle/Picture4.webp',
	},
	{
		id: '5',
		alt: '',
		imgUrl: '/img-about/aboutArticle/Picture5.webp',
	},
	{
		id: '6',
		alt: '',
		imgUrl: '/img-about/aboutArticle/Picture6.webp',
	},
];

const createImg = data.map((img) => (
	<div className="col-3 p-2" key={img.id}>
		<img className="img-responsive" alt={img.alt} src={img.imgUrl} />
	</div>
));

const AboutUsArticle = () => {
	return (
		<Article title="¿Quiénes somos?" imgUrl={process.env.PUBLIC_URL + 'Picture2.webp'}>
			<div className="back-grayLight ">
				<div className="d-flex justify-content-center flex-wrap ">
					<div className="d-flex flex-row flex-wrap  align-content-stretch offset-1">
						<div className="col-sm-12 col-xl-5 ">
							<img
								className="img-responsive"
								src="/img-about/aboutArticle/IMAG0021.webp"
							/>
						</div>

						<div className="col-xl-5 col-sm-12 d-flex justify-content-between align-content-stretch flex-column">
							<div className="" id="History">
								<div
									className="p-5 back-orange"
									data-aos="fade-up"
									data-aos-easing="ease-in-sine"
								>
									<h2>Historia</h2>
									<p>
										Somos una empresa colombiana con más de 20 años de experiencia en el
										monitoreo, análisis y asesoría en el área de vibraciones. Nos
										especializamos en el manejo de tecnología de punta en el área.
										Definimos nuestro actuar con base a la excelencia, enfocando nuestros
										esfuerzos en la sana competencia, la honestidad y el espíritu de
										investigación e innovación.
									</p>
								</div>
							</div>
							<div className="" id="Mission">
								<div
									className="p-5 back-mint"
									data-aos="fade-up"
									data-aos-easing="ease-in-sine"
								>
									<h2>Misión</h2>
									<p>
										Nuestra misión se encuentra centrada en ofrecer servicios de calidad
										en nuestra área de trabajo que permitan brindar a la comunidad
										información reelevante sobre el campo minero-energético, teniendo en
										cuenta normativas especializadas y avaladas tanto nacional, como
										internacionalmente.
									</p>
								</div>
							</div>
							<div className="" id="Vission">
								<div
									className="p-5 back-yellow"
									data-aos="fade-up"
									data-aos-easing="ease-in-sine"
								>
									<h2>Visión</h2>
									<p>
										Nos proyectamos a futuro como una empresa íntegra dedicada a la
										investigación de el área minero-energética, reconocida tanto nacional
										como internacionalemnte como un referente.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="d-flex flex-row offset-1">
						<div className="pt-4 col-5" id="Logo">
							<div
								className="p-5 back-blue"
								data-aos="fade-up"
								data-aos-easing="ease-in-sine"
							>
								<h2>Logo</h2>
								<p>
									A través de años de trabajo hemos participado en múltiples obras, que
									van desde sondeos hasta mega obras por todo el país. Nuestra razón
									social ha experimentado múltiples cambios desde entonces, al igual que
									nuestro logo.
									<br />
									Basándonos en la rama de la geología "Petrografía" y en la palabra
									"Petros" nace la abreviatura "Petro" de nuestra razón social. Además,
									se acuñó el verbo "Blast", que en su estricta traducción sería
									"Explosión".
								</p>
							</div>
						</div>
						<div className="p-4 col-5">
							<img
								className="img-responsive"
								src="/img-about/aboutArticle/logo-about.webp"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="pt-5">
				<div className="back-gray">
					<div className="p-5">
						<div className="container">
							<h1 className="title-black">Galería de imágenes</h1>
							<div className="d-flex flex-row flex-wrap">{createImg}</div>
						</div>
					</div>
				</div>
			</div>
		</Article>
	);
};

export default AboutUsArticle;
