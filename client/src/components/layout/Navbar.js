import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

export const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, user } = authContext;
	const nav = useRef()
	const onClick = () => {
		nav.current.classList.contains('show') && nav.current.classList.remove('show')
	}
	return (
		<nav className='navbar navbar-expand-md navbar-dark hotBorder bg-primary'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					<i className={icon} /> {title}
				</Link>
				<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div onTouchEnd={onClick} onClick={onClick} ref={nav} className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								About
							</Link>
						</li>
					</ul>
					{!isAuthenticated && (
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item'>
								<Link className='nav-link' to='/login'>
									Login
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/register'>
									Register
								</Link>
							</li>
						</ul>
					)}
					{isAuthenticated && (
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item'>
								<Link to='/logout' className='nav-link'>
									Logout {user && `(${user.name})`}
								</Link>
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	title: 'Contact Keeper',
	icon: 'fas fa-id-card-alt',
};
