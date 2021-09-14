import React, { useContext, useEffect } from 'react';
import { Contacts } from '../contacts/Contacts';
import { ContactsForm } from '../contacts/ContactsForm';
import { ContactFilter } from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

export const Home = () => {
	const authContext = useContext(AuthContext)
	const { loadUser } = authContext
	useEffect(() => {
		loadUser();
		// eslint-disable-next-line
	}, [])
	return (
		<div className='container'>
			<div className='row mt-5 g-5 row-cols-2'>
				<div className='col-md-5'>
					<ContactsForm />
				</div>
				<div className='col-md-6 offset-md-1'>
					<ContactFilter />
					<Contacts />
				</div>
			</div>
		</div>
	);
};
