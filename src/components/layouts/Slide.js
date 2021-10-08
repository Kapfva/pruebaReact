import React from 'react';

const Slide = ({ title, children, numSlide }) => {
	return (
		<div className="gris">
			<img src={process.env.PUBLIC_URL+'/Img-Slides/'+ numSlide + '.png'} className="d-block w-100 slide-img" alt={title} />
			<div className="caption d-flex align-items-left justify-content-center col-8">
				<div className=" verde d-flex align-items-left justify-content-center flex-column m-2 col-8 mt-5 ">
					<h1 className="title ">{title}</h1>
					<p className="subtitle">{children}</p>
                    <div className="d-flex align-items-left">
                    <button className=" button-orange ">Ver más</button>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Slide;
