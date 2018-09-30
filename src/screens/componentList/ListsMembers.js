import React from 'react';
import { ListItem, Thumbnail, Content, Body, Text, Left } from 'native-base';

export default class ListsMembers extends React.Component {
		render(){
			const {name, imageUri, status} = this.props.members;
			return (
	          <ListItem 
	          style ={{borderWidth:1}}
	          avatar>
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