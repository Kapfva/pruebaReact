import React from 'react';

import './Section.css';

const Section = ({ title, desc, style, children }) => {
	return (
		<div className="back-grayLight" >
			<div className="container p-3  text-center">
				<div className=" row text-center d-flex justify-content-center">
					<h1 className={style === 'white' ? 'title-section-black' : 'title-section'}>
						{title}
						<hr
				
							className={
								style === 'white'
									? 'separator separator-center separator-orange'
									: 'separator separator-center separator-black'
							}
						/>
					</h1>
					<div className="d-flex justify-content-center">
						<div className="col-7 pt-3">
							<p className={style === 'white' ? 'desc-section-black' : 'desc-section'}>
								{desc}
							</p>
						</div>
					</div>
				</div>
				<div className="desc-section pt-2">{children}</div>
			</div>
			
		</div>
	);
};

export default Section;
