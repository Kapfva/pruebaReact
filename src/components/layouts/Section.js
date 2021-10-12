import React from 'react';

import './Section.css';

const Section = ({ title, desc, children }) => {
	return (
		<div className="container p-3">
			<div className="row text-center">
				<div className=" row text-center d-flex justify-content-center">
					<h1 className="title-section ">
						{title} <hr />
					</h1>
					<div className="row  d-flex justify-content-center">
						<div className="col-6">
							<p className="desc-section">{desc}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="desc-section">{children}</div>
		</div>
	);
};

export default Section;
