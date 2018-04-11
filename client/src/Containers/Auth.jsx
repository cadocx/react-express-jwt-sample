import React from 'react';

class Auth extends React.Component{
	constructor(props){
		super(props);
		this.state = {showInfo: false, info:""};
	}
	handleClick = async (e) =>{
		e.preventDefault();
		try{
			const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
			const json = await response.json();
			this.setState({info: json, showInfo: true});
		}catch(err){
			alert("Error happened ", err);
		}
	}
	render(){
		return (
			<div className='container'>
				<h1>Authenticated Route</h1>
				{!this.state.showInfo && <button onClick={this.handleClick}>Show Business Info</button>}
				{this.state.showInfo && 
					<div class="card-body">
					<div class="jumbotron">
						<h1 class="display-3">{this.state.info.title}</h1>
						<p class="lead">UserId: {this.state.info.userId} | PostId: {this.state.info.id}</p>
						<hr class="my-4" />
						<p>Text : {this.state.info.body}</p>
						<p class="lead">
						</p>
					</div>
                	</div>
				}
			</div>	
		);
	}
}

export default Auth;