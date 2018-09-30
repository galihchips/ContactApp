import React from 'react';
import { ListItem, Thumbnail, Content, Body, Text, Left } from 'native-base';
import { getContact } from '../../actions/contacts';

export default class ContactList extends React.Component {
		render(){

			const {name, phonenumber, imageUri, status, _id} = this.props.contact;
			return (
	         <ListItem 
	         avatar
	         onPress = {() => {this.props.dispatch(getContact(_id))
	         	this.props.navigation.push('ViewScreen')
	         }}>
	              <Left>
	                <Thumbnail source={{uri : imageUri}} />
	              </Left>
	              <Body>
		                <Text>{name}</Text>
		                <Text note>{status}</Text>
	              </Body>
            </ListItem>
		)
	}
}