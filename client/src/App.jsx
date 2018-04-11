import React from 'react';
import Api from './Api';
import NavBar from './NavBar';
import Routes from './Routes';
import './assets/styles/clever-style.css';

class App extends React.Component {
	state = { currentUser: Api.getCurrentUser() };

	onLoginSuccess = (user) => {
		this.setState({ currentUser: Api.getCurrentUser() });
	}

	logOut = () => {
		Api.logOut();
		this.setState({ currentUser: null });
	}
	
	render() {
		const { currentUser } = this.state;
		return (
			<div className='App container'>
				<NavBar currentUser={currentUser} />
				{Routes(this.onLoginSuccess, this.logOut, currentUser)}
			</div>
		)
	}
}

export default App