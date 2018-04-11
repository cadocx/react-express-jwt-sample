import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LogIn from './Containers/LogIn';
import LogOut from './Containers/LogOut';
import SignUp from './Containers/SignUp';
import Auth from './Containers/Auth';
import Home from './Containers/Home';

export default (loginHandler, logoutHandler, currentUser) => {
        return  (<Switch>
					<Route path="/login" render={(props) => {
						return !currentUser ?
						 <LogIn {...props} onLoginSuccess={loginHandler} />
						 : <Redirect to="/auth" />
					}} />
					<Route path="/logout" render={(props) => {
						return <LogOut onLogOut={logoutHandler} />
					}} />
					<Route path="/signup" render={(props) => {
						return <SignUp {...props} onSignUpSuccess={loginHandler} />
					}} />
					<Route path="/auth" render={() => {
						return currentUser
							? <Auth />
							: <Redirect to="/login" />
					}} />
					<Route path="/" component={Home} />
				</Switch>);
}