import React from "react";
import Section from "../layouts/Section";

const Equipments = () => {
    return (
        <div>
            <Section
                title="Monitoreo y control de vibraciones con equipamiento de última generación"
                desc="Trabajamos en pro de la excelencia, para proveer servicios de calidad, que colaboren en el desarrollo de obras y macro obras de todo tipo. En industrias de ingeniería, contrucción, minería y geología."
            >
                <div>
                    <p className="text-center">
                        Equipamiento de control sísmco.
                        <br /> Solo trabajamos con sismógrafos confiables, de
                        fabricación alemana, canadiense y americana;
                        especializados en voladuras o demoliciones. Y
                        certificados en la casa matriz.
                    </p>

                    <div id="instantel" className="col-6">
                        <img src=""></img>
                    </div>
                    <div id="white" className="col-6">
                        <img src=""></img>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Equipments;
