import React, { Fragment, useContext } from 'react';
import contactCotext from '../../context/contact/contactContext';
import { ContactItem } from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
export const Contacts = () => {
	const contactContext = useContext(contactCotext);
	const { contacts, filtered } = contactContext;

	if (contacts.length === 0) {
		return <h4>Please add a contact</h4>;
	}

	return (
		<Fragment>
			<TransitionGroup>
				{filtered !== null ? filtered.map((contact) => <CSSTransition key={contact.id} timeout={500} classNames='item' ><ContactItem contact={contact} /></CSSTransition>) : contacts.map((contact) => <CSSTransition key={contact.id} timeout={500} classNames='item' ><ContactItem contact={contact} /></CSSTransition>)}
			</TransitionGroup>
		</Fragment>
	);
};
