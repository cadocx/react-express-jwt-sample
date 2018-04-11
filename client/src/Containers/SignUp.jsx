import React from 'react';
import Api from '../Api';

class SignUp extends React.Component {
	state = {
		fields: { name: '', email: '', password: ''}
	}

	onInputChange = (evt) => {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		});
	}

	onFormSubmit = (evt) => {
		evt.preventDefault();
		Api.signUp(this.state.fields).then(user => {
			this.setState({ fields: { name: '', email: '', password: '' } });
			if(user) {
				this.props.onSignUpSuccess(user);
				this.props.history.push('/');
			}
		})
	}
	
	render() {
		const { name, email, password } = this.state.fields;
		return (
			<div class="container">
				<div class="row justify-content-center">
				<div class="col-md-8">
					<div class="card-group">
					<div class="card p-4">
						<div class="card-body">
						<h1>Signup</h1>
						<p class="text-muted">Signup</p>
						<div class="input-group mb-3">
							<div class="input-group-prepend">
							<span class="input-group-text"><i class="icon-user"></i></span>
							</div>
							<input type="text" class="form-control" placeholder="Name" value={name} name="name" onChange={this.onInputChange} />
						</div>
						<div class="input-group mb-3">
							<div class="input-group-prepend">
							<span class="input-group-text"><i class="icon-user"></i></span>
							</div>
							<input type="text" class="form-control" placeholder="Email" value={email} name="email" onChange={this.onInputChange} />
						</div>
						<div class="input-group mb-4">
							<div class="input-group-prepend">
							<span class="input-group-text"><i class="icon-lock"></i></span>
							</div>
							<input type="password" class="form-control" placeholder="Password" name="password" onChange={this.onInputChange} />
						</div>
						<div class="row">
							<div class="col-6">
							<button type="button" class="btn btn-primary px-4" onClick={this.onFormSubmit}>Login</button>
							</div>
							<div class="col-6 text-right">
							<button type="button" class="btn btn-link px-0">Forgot password?</button>
							</div>
						</div>
						</div>
					</div>
					<div class="card text-white bg-primary py-5 d-md-down-none" style={{"width" :"44%"}}>
						<div class="card-body text-center">
						<div>
							<h2>Sign up</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
				</div>
		);
	}
}

export default SignUp;