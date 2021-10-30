import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import './Article.css';

const Article = ({ title, children, imgUrl }) => {
	return (
		<div>

			<div className="content-page">
				<div className="top-banner">
					<img className="img-opaque" src={imgUrl}></img>
					<div className="title-banner">
						{title}
						<hr className="separator separator-white" />
					</div>
				</div>
				<div className="content-article">{children}</div>
			</div>
		</div>
	);
};

export default Article;
