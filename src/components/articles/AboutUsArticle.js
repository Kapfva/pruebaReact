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
			<div className="back-grayLight p-3">
				<div className="container">
					<div className="d-flex flex-row flex-wrap ">
						<div className="col-6">
							<div className="">
								<img
									className="img-responsive"
									src="/img-about/aboutArticle/IMAG0021.webp"
								/>
							</div>
						</div>

						<div className="col-6">
							<div className="pb-4" id="History">
								<div
									className="p-3 back-orange"
									data-aos="fade-up"
									data-aos-easing="ease-in-sine"
								>
									<h1>Historia</h1>
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
							<div className="pb-4" id="Mission">
								<div
									className="p-3 back-mint"
									data-aos="fade-up"
									data-aos-easing="ease-in-sine"
								>
									<h1>Misión</h1>
									<p>
										Nuestra misión se encuentra centrada en ofrecer servicios de calidad
										en nuestra área de trabajo que permitan brindar a la comunidad
										información reelevante sobre el campo minero-energético, teniendo en
										cuenta normativas especializadas y avaladas tanto nacional, como
										internacionalmente.
									</p>
								</div>
							</div>
							<div className="pb-4" id="Vission">
								<div
									className="p-4 back-yellow"
									data-aos="fade-up"
									data-aos-easing="ease-in-sine"
								>
									<h1>Visión</h1>
									<p>
										Nos proyectamos a futuro como una empresa íntegra dedicada a la
										investigación de el área minero-energética, reconocida tanto nacional
										como internacionalemnte como un referente.
									</p>
								</div>
							</div>
						</div>
						<div className="d-flex flex-row flex-wrap">
							<div className="pt-4 col-6" id="Logo">
								<div
									className="p-3 back-blue"
									data-aos="fade-up"
									data-aos-easing="ease-in-sine"
								>
									<h1>Logo</h1>
									<p>
										A través de años de trabajo hemos participado en múltiples obras, que
										van desde sondeos hasta mega obras por todo el país. Nuestra razón
										social ha experimentado múltiples cambios desde entonces, al igual
										que nuestro logo.
										<br />
										Basándonos en la rama de la geología "Petrografía" y en la palabra
										"Petros" nace la abreviatura "Petro" de nuestra razón social. Además,
										se acuñó el verbo "Blast", que en su estricta traducción sería
										"Explosión".
									</p>
								</div>
							</div>
							<div className="p-4 col-6">
								<img
									className="img-responsive"
									src="/img-about/aboutArticle/logo-about.webp"
								/>
							</div>
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
