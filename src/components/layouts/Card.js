import React from "react";
import "./Card.css";

const Card = ({ title, desc, imgUrl }) => {
    return (
        <div>
            <div className="card m-3">
                <img src={imgUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">
                        Ver más
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
