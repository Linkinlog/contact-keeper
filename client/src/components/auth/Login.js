import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

export const Login = (props) => {
	const authContext = useContext(AuthContext)
	const alertContext = useContext(AlertContext)
	const { isAuthenticated, clearErrors, error, login } = authContext;
	const { setAlert } = alertContext;

	useEffect(() => {
		if(isAuthenticated) props.history.push('/')
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
	}, [error, isAuthenticated, props.history]);
	
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const { email, password } = user;

	const onSubmit = e => {
		e.preventDefault();
		let err = false;
		for(let field in user){
			if(user[field] === ''){
				setAlert(`Please fill in ${field}`, 'danger')
				err = true
			}
		}
		if(!err){
			login(user)
		}
	}

	const onChange = e => {
		setUser({...user, [e.target.name]: e.target.value})
	}
	
	return (
		<div className='col'>
			<h1 className='text-center'>
				Account <span className='text-primary'>Login</span>
			</h1>
			<form onSubmit={onSubmit}>
				<label className='form-label' htmlFor='email'>Email Address</label>
				<input type='email' name='email' value={email} className='form-control' onChange={onChange} required/>
				<label className='form-label' htmlFor='password'>Password</label>
				<input type='password' name='password' value={password} className='form-control mb-3' onChange={onChange} required/>
				<input type="submit" value="Login" className='btn btn-primary' />
			</form>
		</div>
	);
};
