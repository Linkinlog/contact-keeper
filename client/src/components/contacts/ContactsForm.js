import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

export const ContactsForm = () => {
	const contactContext = useContext(ContactContext);
	const { addContact } = contactContext;
	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: '',
	});

	const { name, email, phone, type } = contact;

	const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		addContact(contact);
		setContact({
			name: '',
			email: '',
			phone: '',
			type: '',
		});
	};

	return (
		<div className='addContact'>
			<form className='hotBorder rounded-3 p-4' onSubmit={onSubmit}>
				<h2 className='text-primary text-center'>Add Contact</h2>
				<label class='form-label' htmlFor='name'>
					Name :
				</label>
				<input type='text' class='form-control mb-3' placeholder='Name' name='name' id='name' value={name} onChange={onChange} />
				<label class='form-label' htmlFor='email'>
					E-Mail :
				</label>
				<input type='email' id='email' class='form-control mb-3' placeholder='Email' name='email' value={email} onChange={onChange} />
				<label class='form-label' htmlFor='phone'>
					Phone :
				</label>
				<input type='text' class='form-control mb-3' placeholder='Phone' id='phone' name='phone' value={phone} onChange={onChange} />
				<label class='form-label' htmlFor='type'>
					Type :
				</label>
				<br />
				<input type='radio' name='type' id='personal' value='personal' onChange={onChange} checked={type === 'personal'} />
				<label htmlFor='personal'>Personal </label>
				<input type='radio' name='type' id='professional' value='professional' onChange={onChange} checked={type === 'professional'} />
				<label htmlFor='professional'>Professional </label>
				<div className='text-center mt-2'>
					<input type='submit' value='Add Contact' className='btn btn-info' />
				</div>
			</form>
		</div>
	);
};
