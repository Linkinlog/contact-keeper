import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

export const ContactsForm = () => {
	const contactContext = useContext(ContactContext);
	const { addContact, current, clearCurrent, updateContact } = contactContext;
	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});

	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal',
			});
		}
	}, [contactContext, current]);

	const { name, email, phone, type } = contact;

	const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addContact(contact);
		} else {
			updateContact(contact);
		}
		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal',
		});
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<div className='addContact'>
			<form className='hotBorder rounded-3 p-4' onSubmit={onSubmit}>
				<h2 className='text-primary text-center'>{current ? 'Edit Contact' : 'Add Contact'}</h2>
				<label className='form-label' htmlFor='name'>
					Name :
				</label>
				<input type='text' className='form-control mb-3' placeholder='Name' name='name' id='name' value={name} onChange={onChange} required/>
				<label className='form-label' htmlFor='email'>
					E-Mail :
				</label>
				<input type='email' id='email' className='form-control mb-3' placeholder='Email' name='email' value={email} onChange={onChange} />
				<label className='form-label' htmlFor='phone'>
					Phone :
				</label>
				<input type='text' className='form-control mb-3' placeholder='Phone' id='phone' name='phone' value={phone} onChange={onChange} />
				<label className='form-label' htmlFor='type'>
					Type :
				</label>
				<br />
				<div className='form-check'>
					<input className='form-check-input' type='radio' value='personal' name='type' id='personal' onChange={onChange} checked={type === 'personal'} />
					<label className='form-check-label' htmlFor='personal'>
						Personal
					</label>
				</div>

				<div className='form-check'>
					<input className='form-check-input' type='radio' value='professional' name='type' id='professional' onChange={onChange} checked={type === 'professional'} />
					<label className='form-check-label' htmlFor='professional'>
						Professional
					</label>
				</div>
				<div className='text-center m-2 d-grid gap-2 d-md-block'>
					<input type='submit' value={current ? 'Update Contact' : 'Add Contact'} className='btn btn-info btn-block' />
					{current && (
						<div className='mt-2'>
							<button onClick={clearAll} className='btn btn-info btn-block'>
								Clear
							</button>
						</div>
					)}
				</div>
			</form>
		</div>
	);
};
