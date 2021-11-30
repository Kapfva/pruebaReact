import React from 'react';
import './Card.css';

import { Link } from 'react-router-dom';

const CardOnlyDesc = ({ title, desc, url }) => {
	return (
		<div>
			<div className="card m-3">
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					
					<p className="card-text">{desc} </p>
					<Link to={url} className=" button-orange">
						Ver más
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CardOnlyDesc;
