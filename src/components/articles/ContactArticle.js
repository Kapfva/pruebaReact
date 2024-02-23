import React from "react";
import Article from "../layouts/Article";
import Contact from "../homeComponents/Contact";

const ContactArticle = () => {
	return (
		<Article
			title="Contacto"
			imgUrl="pBanner.png"
		>
			<Contact />
		</Article>
	);
};

export default ContactArticle;
