import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <section className="footer" id="Footer">
                <div className="d-flex flex-column mb-auto">
                    <div className="d-flex flex-row">
                        <div className="col-6 div-dark row justify-content-center p-5">
                            <img
                                className="img-fluid rounded "
                                src="logo_petroblast.png"
                                alt="Petroblast S.A.S"
                                to="/Home"
                            />
                            <div>
                                <h2>¿Qué hacemos?</h2>
                                <hr />
                                <Link>Análisis de vibraciones</Link>
                                <Link>Diseño de voladuras</Link>
                                <Link>
                                    Control de daño en contorno y entorno
                                </Link>
                                <Link>Análisis de registros sísmicos</Link>
                                <Link>Consultoría</Link>
                            </div>
							<div>
                                <h2>Síguenos</h2>
								<Link><img src="logo_petroblast.png"></img></Link>
                                
                            </div>
                        </div>
                        <div className="col-6 div-clear row justify-content-center p-5">
                            <img
                                className="img-fluid rounded geo"
                                src="logo_petroblast.png"
                                alt="Petroblast S.A.S"
                            />
							<div>
                                <h2>Contáctanos</h2>
                                <hr />
								<img src="logo_petroblast.png"></img>
                                <p>3133971069</p>
								<img src="logo_petroblast.png"></img>
                                <p>petroblastsas@gmail.com</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-column bd-highlight p-3 div-down col-12">
                        <p className="">©2021 PetroBlast SAS. Todos los derechos reservados.</p>{" "}
                        <p>
                            <a className="link">Diseñador Web</a> — Karem Pinto
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
