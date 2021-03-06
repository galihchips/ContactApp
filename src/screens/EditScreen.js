//IMPORT FROM REACT

import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, Body, Text, List, ListItem, Thumbnail, Header, Left, Right, Button, Card, CardItem, Image, Title, Form, Item, Label, Input, Footer } from 'native-base';
import { View } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

//IMPORT FUNCTION
import { fetchContacts } from '../actions/contacts';

class EditName extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	name : this.props.navigation.state.params.name,
	  	phonenumber : this.props.navigation.state.params.phonenumber
	  };
	}

	static navigationOptions = {
	    header: null
	}
	
	handleEdit(id){			 
		      axios({
			      method: 'put',
			      url: `http://192.168.0.17:5000/api/contacts/${id}`,
			      data: this.state
			    }).then(()=>{
			      this.props.dispatch(fetchContacts());
			      this.props.navigation.popToTop();
			    });
	}
	
	render(){
		const contact = this.props.navigation.state.params
		return (
				<Container>
					<Header androidStatusBarColor="#048c00" style ={{backgroundColor : '#06ce00'}}>
				        <Left />
					 	<Body style={{alignSelf: 'center'}}>
						 	<Title style ={{color : '#fff'}}>Input Your Number</Title>
					 	</Body>
					</Header>
					<Content>
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
						onPress = {() => this.handleEdit(contact._id)}
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
export default connect(mapStateToProps)(EditName);