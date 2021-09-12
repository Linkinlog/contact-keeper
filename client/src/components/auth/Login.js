import React, { useState } from 'react';

export const Login = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = user;

	const onChange = e => {
		setUser({...user, [e.target.name]: e.target.value})
	}
	
	return (
		<div className='col'>
			<h1 className='text-center'>
				Account <span className='text-primary'>Login</span>
			</h1>
			<form>
				<label className='form-label' htmlFor='email'>Email Address</label>
				<input type='email' name='email' value={email} className='form-control' onChange={onChange} />
			</form>
			<form>
				<label className='form-label' htmlFor='password'>Password</label>
				<input type='password' name='password' value={password} className='form-control mb-3' onChange={onChange} />
				<input type="submit" value="Register" className='btn btn-primary' />
			</form>
		</div>
	);
};
