import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/layout/Navbar';
import { Alerts } from './components/layout/Alerts';
import { Fragment } from 'react';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Register } from './components/auth/Register';
import { Login } from './components/auth/Login'
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';

import './App.css';
import AlertState from './context/alert/AlertState';
import { setAuthToken } from './utils/setAuthToken';
import { Logout } from './components/auth/Logout';
import { PrivateRoute } from './components/PrivateRoute';
if(localStorage.token){
	setAuthToken(localStorage.token)
}
const App = () => {
	return (
		<AuthState> 
			<ContactState>
				<AlertState>
				<Router>
					<Fragment>
						<Navbar />
						<div className='container'>
							<Alerts />
							<Switch>
								<PrivateRoute exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/register' component={Register} />
								<Route exact path='/login' component={Login} />
								<Route exact path='/logout' component={Logout} />
							</Switch>
						</div>
					</Fragment>
				</Router>
				</AlertState>
			</ContactState>
		</AuthState>
	);
};

export default App;
