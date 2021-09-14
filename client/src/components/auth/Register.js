import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

export const Register = () => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);
	const { register, error, clearErrors } = authContext;
	const { setAlert } = alertContext;

	useEffect(() => {
		// todo see if this is ever needed or if we can just loop all errors
		// if (error === 'User already exists') {
		// 	setAlert(error, 'danger');
		// 	clearErrors();
		// }
		if (error && error.length !== 0) {
			setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error]);

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = user;

	const onSubmit = (e) => {
		e.preventDefault();
		let err = false;
		for (let field in user) {
			if (field === 'password2') continue;
			if (user[field] === '') {
				setAlert(`${field.charAt(0).toUpperCase() + field.slice(1)} is required.`, 'warning');
				err = true;
			}
		}
		if (password !== password2) {
			setAlert('Passwords do not match', 'warning');
			err = true;
		}
		if (!err) {
			register({
				name,
				email,
				password,
			});
		}
	};

	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<div className='col'>
			<h1 className='text-center'>
				Account <span className='text-primary'>Register</span>
			</h1>
			<form onSubmit={onSubmit}>
				<label className='form-label' htmlFor='name'>
					Name
				</label>
				<input type='text' name='name' value={name} className='form-control' onChange={onChange} />
				<label className='form-label' htmlFor='email'>
					Email Address
				</label>
				<input type='email' name='email' value={email} className='form-control' onChange={onChange} />
				<label className='form-label' htmlFor='password'>
					Password
				</label>
				<input type='password' name='password' value={password} className='form-control' onChange={onChange} />
				<label className='form-label' htmlFor='password2'>
					Confirm Password
				</label>
				<input type='password' name='password2' value={password2} className='form-control mb-3' onChange={onChange} />
				<input type='submit' value='Register' className='btn btn-primary' />
			</form>
		</div>
	);
};
