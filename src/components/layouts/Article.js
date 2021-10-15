import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import './Article.css';

const Article = ({ title, children, imgUrl }) => {
	return (
		<div>
			<Navbar />

			<div className="content-page">
				<div className="top-banner">
					<img src={imgUrl}></img>
					<div className="title-banner">
						{title}
						<hr className="separator separator-white" />
					</div>
				</div>
				<div className="content-article">{children}</div>
			</div>

			<Footer />
		</div>
	);
};

export default Article;
