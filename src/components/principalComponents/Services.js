import React from "react";
import Card from "../layouts/Card";
import Section from "../layouts/Section";

const Services = () => {
    return (
        <div>
            <Section
                title="Nuestros Servicios"
                desc="Proporcionamos información cuantitativa y cualitativa de la más alta calidad sobre procesos mineros y el uso de explosivos para fragmentación de rocas."
            >
                <div className="d-flex flex-wrap m-3">
                    <Card
                        title="Voladuras a cielo abierto"
                        desc="Diseño de voladuras. Medición de vibraciones y ruido generado por voladuras con aplicaciones como la explotación minera."
                        imgUrl="logo_petroblast.png"
                    />
                    <Card
                        title="Voladuras subterráneas"
                        desc="Diseño y medición de voladuras en obras subterráneas, como cavernas, túneles, galerias y pozos. Control de daño y entorno."
                        imgUrl="logo_petroblast.png"
                    />
                    <Card
                        title="Tráfico vehicular y trenes"
                        desc="Control y monitoreo de vibraciones generadas por tráfico vehicular y trenes."
                        imgUrl="logo_petroblast.png"
                    />
                    <Card
                        title="Demoliciones"
                        desc="Control y monitoreo de vibraciones causadas por voladuras en obras civiles dentro de la ciudad."
                        imgUrl="logo_petroblast.png"
                    />
                    <Card
                        title="Monitoreo de ruido"
                        desc="Monitoreo de ondas sonoras generadas por tráfico y construcciones."
                        imgUrl="logo_petroblast.png"
                    />
                    <Card
                        title="Aplicación de normativas para el análisis de vibraciones y control sísmico en voladura de rocas"
                        desc=""
                        imgUrl="logo_petroblast.png"
                    />
                    <Card
                        title="Exploración sísmica"
                        desc="Exploración sísmica para búsqueda de aguas y petróleo."
                        imgUrl="logo_petroblast.png"
                    />
                </div>
            </Section>
        </div>
    );
};

export default Services;
