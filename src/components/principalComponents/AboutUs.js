import React from "react";
import Section from "../layouts/Section";

const AboutUs = () => {
    return (
        <div>
            <div className="row ">Aquí van las imágenes </div>
            <Section
                title="¿Quiénes somos?"
                desc="Empresa colombiana, especializada en el campo de análisis y monitoreo de vibraciones."
            >
                <div className="pl-5 pr-5 p-3">
                    <div className="row">
                        <div className="col-6">
                            <div className="row d-flex">
                                <h1>+20</h1>
                                <p>
                                    Años de experiencia en ingeniería minera,
                                    geológica y geofísica.
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <i className="bi bi-egg-fried"></i>
                                <p>
                                    Personal capacitado, certificado y
                                    especializado en disciplinas afines a
                                    proyectos de monitoreo de vibraciones.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button>Ver más</button>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default AboutUs;
