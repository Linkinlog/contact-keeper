import React, { useState } from 'react';

export const Register = () => {
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
			<h1>
				Account <span className='text-primary'>Register</span>
			</h1>
			<form>
				<label className='form-label' htmlFor='name'>Name</label>
				<input type='text' name='name' value={name} className='form-control' onChange={onChange} />
			</form>
			<form>
				<label className='form-label' htmlFor='email'>Email Address</label>
				<input type='email' name='email' value={email} className='form-control' onChange={onChange} />
			</form>
			<form>
				<label className='form-label' htmlFor='password'>Password</label>
				<input type='password' name='password' value={password} className='form-control' onChange={onChange} />
			</form>
			<form>
				<label className='form-label' htmlFor='password2'>Confirm Password</label>
				<input type='password2' name='password2' value={password2} className='form-control' onChange={onChange} />
				<input type="submit" value="Register" className='btn btn-primary' />
			</form>
		</div>
	);
};
