//IMPORT COMPONENT FROM REACT

import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, Body, Text, List, ListItem, Thumbnail, Header, Left, Right, Button, Card, CardItem, Image, Title, Form, Item, Label, Input, Footer } from 'native-base';
import { View } from 'react-native';
import axios from 'axios';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

//IMPORT FUNCTION

import { updateContact, fetchContacts } from '../actions/contacts';
import { connect } from 'react-redux';

class EditInfo extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	name : this.props.navigation.state.params.name,
	  	phonenumber : this.props.navigation.state.params.phonenumber,
	  	contact: this.props.navigation.state.params
	  };
	}

	static navigationOptions = {
	    header: null
	}

	handleEdit(id){			 
		this.props.dispatch(updateContact(id ,this.state))
		this.props.navigation.goBack()
	}
	
	render(){
		const contact = this.props.navigation.state.params
		return (
				<Container>
					<Header androidStatusBarColor="#048c00" style ={{backgroundColor : '#06ce00'}}>
				        <Left />
					 	<Body style={{alignSelf: 'center'}}>
						 	<Title style ={{color : '#fff'}}>Edit Info</Title>
					 	</Body>
					</Header>
					<Content>
						<Form>
				            <Item floatingLabel>
				              <Label>Name</Label>
				              <Input 
				              value = {this.state.name}
				              onChangeText={(text)=>this.setState({name: text})}
				              />
				            </Item>
				          </Form>
				          <Form>
				            <Item floatingLabel>
				              <Label>Phone Number</Label>
				              <Input
				              maxLength = {13}
                      		  keyboardType="numeric"
				              value = {this.state.phonenumber}
				              onChangeText={(text)=>this.setState({phonenumber: text})}
				              />
				            </Item>
				          </Form>
					</Content>
					<Footer style ={{backgroundColor :'#fff'}}>
						<Button 
						onPress={()=> this.props.navigation.goBack()}
						full light>
				            <Text>Cancel</Text>
				        </Button>
						<Button 
						full light
						onPress = {() =>this.handleEdit(contact._id)}
						>
				            <Text>Save</Text>
				        </Button>

					</Footer>
				</Container>
			)
	}
}

const mapStateToProps = (state) => {
  return{
    contacts: state.contacts.contacts
  }
}
export default connect(mapStateToProps)(EditInfo);