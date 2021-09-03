import React, { useContext } from 'react';
import contactCotext from '../../context/contact/contactContext';
import { ContactItem } from './ContactItem';

export const Contacts = () => {
	const contactContext = useContext(contactCotext);

	const { contacts } = contactContext;

	return (
		<div className="row g-5 row-cols-xl-2">
			{contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)}
		</div>
	);
};
