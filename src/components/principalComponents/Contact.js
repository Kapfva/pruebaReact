import React from 'react';
import Section from '../layouts/Section';
import ContactCard from './ContactCard';

const Contact = () => {
	return (
		<Section title="Contacto">
			<div className="container d-flex flex-row">
				<ContactCard />
			</div>
		</Section>
	);
};

export default Contact;
