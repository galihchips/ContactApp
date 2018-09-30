import React, { Component } from 'react';
import { Content, Container, Header, Text } from 'native-base';

export default class SplashScreen extends Component {

	static navigationOptions = {
	    header: null
	}

	ComponentWillMount(){
		setTimeout(()=>{
			this.props.navigation.navigate('ListContacts');
		}, 2000)
	}

	render(){
		return(
			<Content>
				<Text>Splash Screen</Text>
			</Content>
		)
	}
}
