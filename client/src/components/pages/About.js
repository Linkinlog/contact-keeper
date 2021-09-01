import React from 'react';

export const About = () => {
	return (
		<div className='col-md-6 offset-md-3 mt-5 p-4 hotBorder rounded-3 text-center'>
			<h1>About This App</h1>
			<p>This is a full stack React app for keeping contacts</p>
			<p className='bg-dark text-light'>
				<strong>Version: </strong> 1.0.0
			</p>
		</div>
	);
};
