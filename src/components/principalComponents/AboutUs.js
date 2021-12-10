import React from 'react';
import Section from '../layouts/Section';

import { Link } from 'react-router-dom';

import './AboutUs.css';

const numImg = [];

for (var i = 1; i < 5; i++) {
	numImg.push(
		<div key={i}>
			<img key={i} src={process.env.PUBLIC_URL + '/img-about/' + i + '.webp'}></img>
		</div>
	);
}

const AboutUs = () => {
	return (
		<section className="" name="About">
			<div className=" d-flex flex-row align-items-center img-about">{numImg}</div>
			<div>
				<Section
					title="¿Quiénes somos?"
					desc="Trabajamos en pro de la excelencia, para proveer servicios de calidad, que
						colaboren en el desarrollo de obras y macro obras de todo tipo. En industrias
						de ingeniería, contrucción, minería y geología."
					style=""
				>
					<div className="">
						<div
							className=" d-flex flex-row flex-wrap"
							data-aos="fade-up"
							data-aos-easing="ease-in-sine"
						>
							<div className="col-6 pt-2">
								<div className="d-flex flex-row flex-wrap">
									<div className="col-4  text-center">
										<h1 className="text-remarked">+20</h1>
									</div>

									<div className="col d-flex flex-column text-center align-items-center">
										<p className="">
											Años de experiencia en ingeniería minera, geológica y geofísica.
										</p>
										<Link className="button-orange" to="/about">
											Conócenos
										</Link>
									</div>
								</div>
							</div>

							{/* separa  */}
							<div className="col-6 pt-2">
								<div className="d-flex flex-row flex-wrap">
									<div className="col-4 text-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="100"
											height="70"
											fill="#ff7f00"
											className="bi bi-people-fill"
											viewBox="0 0 16 16"
										>
											<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
											<path
												fillRule="evenodd"
												d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
											/>
											<path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
										</svg>
									</div>

									<div className="col d-flex flex-column text-center align-items-center">
									<p className="">
										Personal capacitado, certificado y especializado en disciplinas
										afines a proyectos de monitoreo de vibraciones.
									</p>
									<Link className="button-orange" to="/jobs">
										Trabajos
									</Link>
								</div>
								</div>
							</div>
						</div>
					</div>
				</Section>
			</div>
		</section>
	);
};

export default AboutUs;
