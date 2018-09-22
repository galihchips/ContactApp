import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
	Container,
	Content,
	Body,
	Text,
	List,
	ListItem,
	Thumbnail,
	Header,
	Left,
	Right
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';


import axios from 'axios';
import data from '../reducers/contact';
import { fetchContact } from '../actions/contact';
import ContactList from './ContactList';
import { connect } from 'react-redux';

class ListContact extends Component {
	static navigationOptions = {
    header: null
}
 	componentDidMount(){
 		this.props.dispatch(fetchContact())
}
 	render(){
 		return (
 			<Container>
	 			<Header style={{backgroundColor :'#fff',borderBottomWidth : 0.5}}>
	 				<Left />
	 				<Body style={{alignSelf: 'center'}}>
		 				<Text style={{fontSize : 20}}>Daftar Kontak</Text>
	 				</Body>
	 				<Right>
	 					<TouchableOpacity onPress = {() => this.props.navigation.push('AddContact')} >
	 						<Icon 
		 						style ={{marginRight : 20}}
		 						name ='ios-add' size ={35}
		 					/>
	 					</TouchableOpacity>
	 				</Right>
	 			</Header>
	 			<Content>
	 				<List>
	 					{this.props.data.contactList.map((contact, key) => <ContactList key ={key} contact = {contact} {...this.props} />)}
	 				</List>
	 			</Content>
 			</Container>
 		)
    }
}
const mapStateToProps = (state) => {
  return{
    data: state
  }
}
export default connect(mapStateToProps)(ListContact);