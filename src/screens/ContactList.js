import React from 'react';
import {
	ListItem,
	Thumbnail,
	Content,
	Body,
	Text
} from 'native-base';

export default class ContactList extends React.Component {
		render(){
			return (
				<ListItem onPress = {() => this.props.navigation.push('ViewScreen',this.props.contact)} thumbnail>      
	                <Thumbnail square source={{ uri: this.props.contact.imageUri }} />
	                  <Body>
	                    <Text>{this.props.contact.nama}</Text>
	                    <Text note>{this.props.contact.no}</Text>
	                  </Body>
	            </ListItem>
		)
	}
}