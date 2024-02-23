import React from 'react';
import '@styleLayout/Card.css';

import { Link } from 'react-router-dom';

const Card = ({ title, desc, imgUrl, style }) => {
	return (
		<div>
			<div className= "card m-3">
				<div className="image d-flex justify-content-center">
					<img src={imgUrl} className="card-img-top" alt={title} />
				</div>

				<div className= {style ==='gray'? 'card-body back-gray' : 'card-body' }>
					<h5 className= "card-title" >{title}</h5>
					<p className="card-text">{desc}</p>
					<Link to="/prueba" className=" button-orange">
						
						Ver más
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
