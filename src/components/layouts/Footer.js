import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
	return (
		<footer className="fondo text-white background-rej" id="Footer">
			<div className="pt-5">
				<div className="back-opacity pl-5">
					<div className="col">
						<img
							className="img-fluid rounded col-6"
							src={process.env.PUBLIC_URL + '/logo_petroblast.png'}
							alt="Petroblast S.A.S"
							to="/Home"
						/>
					</div>
					<div className="container-body d-flex flex-row flex-wrap pt-2 pl-2">
						<div className="column1 col-4">
							<h2>¿Qué hacemos?</h2>
							<hr className="separator separator-orange" />
							<div className="d-flex flex-column ">
								<Link className=" d-flex flex-row link-white" to="/404">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="28"
										fill="white"
										className="bi bi-link-45deg"
										viewBox="0 0 16 16"
									>
										<path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
										<path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
									</svg>
									<p className="pl-2"> Análisis de vibraciones</p>
								</Link>
								<Link className=" d-flex flex-row link-white" to="/404">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="28"
										fill="white"
										className="bi bi-link-45deg"
										viewBox="0 0 16 16"
									>
										<path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
										<path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
									</svg>
									<p className="pl-2">Diseño de voladuras</p>
								</Link>
								<Link className=" d-flex flex-row link-white" to="/404">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="28"
										fill="white"
										className="bi bi-link-45deg"
										viewBox="0 0 16 16"
									>
										<path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
										<path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
									</svg>
									<p className="pl-2">Control de daño en contorno y entorno</p>
								</Link>
								<Link className=" d-flex flex-row link-white" to="/404">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="28"
										fill="white"
										className="bi bi-link-45deg"
										viewBox="0 0 16 16"
									>
										<path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
										<path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
									</svg>
									<p className="pl-2">Análisis de registros sísmicos</p>
								</Link>
								<Link className=" d-flex flex-row link-white" to="/404">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="28"
										fill="white"
										className="bi bi-link-45deg"
										viewBox="0 0 16 16"
									>
										<path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
										<path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
									</svg>
									<p className="pl-2">Consultoría</p>
								</Link>
							</div>
						</div>
						{/* End column1  */}
						<div className="column2 col-3">
							<h2>Síguenos</h2> <hr className="separator separator-orange" />
							<div>
								<a href="https://www.facebook.com/PetroBlastSAS/">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="40"
										height="40"
										fill="white"
										className="bi bi-facebook svg-white"
										viewBox="0 0 16 16"
									>
										<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
									</svg>
								</a>
							</div>
						</div>
						{/* End column2  */}
						<div className="column3 col-4">
							<h2>Contáctanos</h2>
							<hr className="separator separator-orange" />

							{/* <div className=" d-flex flex-row ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="23"
										height="28"
										fill="white"
										className="bi bi-telephone-fill"
										viewBox="0 0 16 16"
									>
										<path
											fill-rule="evenodd"
											d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
										/>
									</svg>
									<p className="pl-2">3133971069</p>
								</div> */}
							<div className=" d-flex flex-row ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="28"
									fill="white"
									className="bi bi-envelope-fill"
									viewBox="0 0 16 16"
								>
									<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
								</svg>
								<p className="pl-2">petroblastsas@gmail.com</p>
							</div>
						</div>
						{/* End column3  */}
					</div>
				</div>
			</div>

			<div className="container-foot  div-black">
				<hr className="" />
				<div className="d-flex flex-column justify-content-center align-items-center  ">
					<p className="text-white">
						©2021 PetroBlast SAS. Todos los derechos reservados.
					</p>
					<div className="d-flex">
						<p className="text-orange">Diseñador Web</p>
						<a className="link-white" href="https://github.com/Kapfva">
							{' '}
							— Karem V. Pinto F.
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
