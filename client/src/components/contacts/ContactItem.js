import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext';

export const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext)
	const { deleteContact, setCurrent, clearCurrent } = contactContext
	const { _id, name, email, phone, type } = contact;
	const onDelete = () => {
		deleteContact(_id)
		clearCurrent()
	}
	return (
		<div>
			<div className='card rounded-3 contact hotBorder mt-5'>
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
					<div className="d-grid text-center d-md-block">
						<button onClick={() => setCurrent(contact)} className="btn btn-dark btn-sm">Edit</button>
						<button onClick={onDelete} className="btn btn-danger btn-sm ms-2">Delete</button>
					</div>
				</div>
			</div>
		</div>
	);
};


ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
}