import React from 'react';
import { Contacts } from '../contacts/Contacts';
import { ContactsForm } from '../contacts/ContactsForm';

export const Home = () => {
	return (
		<div className='container'>
			<div className='row mt-5 g-5 row-cols-2'>
				<div className='col-md-5'>
					<ContactsForm />
				</div>
				<div className='col-md-6 offset-md-1'>
					<Contacts />
				</div>
			</div>
		</div>
	);
};
