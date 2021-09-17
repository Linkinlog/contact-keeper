import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';

export const ContactFilter = () => {
	const contactContext = useContext(ContactContext);
	const { filterContacts, clearFilter, filtered } = contactContext;
	const text = useRef('');

	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	}, [filtered]);

	const onChange = (e) => {
		if (text.current.value !== '') {
			filterContacts(e.target.value);
		} else {
			clearFilter();
		}
	};

	return (
		<form style={{background:'white'}} className='hotBorder rounded-3 p-4'>
			<label className='form-label' htmlFor='filter'>
				Filter contacts:
			</label>
			<input className='form-control' type='text' name='filter' ref={text} placeholder='Filter contacts...' onChange={onChange} />
		</form>
	);
};
