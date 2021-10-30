import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import './Article.css';

const Article = ({ title, children, imgUrl }) => {
	return (
		<div className="">
			<div className="top-banner d-flex align-items-center">
				<img className="img-opaque img-banner img-fluid" src={imgUrl}></img>
				
					<div className="title-banner p-5 pt-5 pb-1">
						<h1 className="title-white pt-4">{title}</h1>
						<hr className="separator separator-orange" />
					</div>
				
			</div>
			<div className="content-page">
				<div className="content-article">{children}</div>
			</div>
		</div>
	);
};

export default Article;
