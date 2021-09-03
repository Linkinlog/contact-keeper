import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext';

export const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext)
	const { deleteContact } = contactContext
	const { id, name, email, phone, type } = contact;
	return (
		<div>
			<div className='card rounded-3 contact hotBorder mt-5' style={{width:'18rem'}}>
				<div className='card-body'>
					<h5 className='card-title'>
						{name} <span style={{float : 'right'}}  className={'badge ' + (type === 'professional' ? 'bg-secondary' : 'bg-primary')}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
					</h5>
					<ul className="list">
						{email && (<li>
							<i  className="fa fa-envelope-open" aria-hidden="true" />{' '}{email}
						</li>)}
						{phone && (<li>
							<i  className="fa fa-phone" aria-hidden="true" />{' '}{phone}
						</li>)}
					</ul>
					<div className="d-grid gap- d-md-block">
						<button className="btn btn-dark btn-sm">Edit</button>
						<button onClick={() => deleteContact(id)} className="btn btn-danger btn-sm ms-2">Delete</button>
					</div>
				</div>
			</div>
		</div>
	);
};


ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
}