import React from 'react';
import './NotFound.css';


const NotFound = () => {
	return (
		<div className="pt-5 back-grayLight text-center animate__animated animate__shakeX">
			<div className="content-page container p-5">
				<h1 className="title-max  ">¡OPPS!</h1>
				<div ><img className="img-notfound" src={process.env.PUBLIC_URL + 'Logo-whf.png'} /></div>
				<h3>La página que buscar ha sido demolida o en este momento está en construcción, prueba de nuevo más tarde.</h3>
			</div>
		</div>
	);
};

export default NotFound;
