import React, {Component, useState, useEffect} from 'react';
import FacebookLogin from 'react-facebook-login';


export default class Facebook extends Component {
	state = {
		isLoggedIn: false,
		userID: '',
		name: '',
		email: '',
		picture: ''
	}

	responseFacebook = response => {
		console.log(response);
	}

	componentClicked = () => console.log('Used');

	render(){
		let fbContent;

		if(this.state.isLoggedIn) {
			fbContent = null;
		} else {
			  fbContent =(<FacebookLogin
			    appId="1066869897141922"
			    autoLoad={true}
			    fields="name,email,picture"
			    onClick={this.componentClicked}
			    callback={this.responseFacebook} 
			    />
			   );
		}
	return <div>{fbContent}</div>;
	}
}