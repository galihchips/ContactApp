import React from 'react';
import { ListItem, Thumbnail, Content, Body, Text, Left } from 'native-base';

export default class ViewGroupLists extends React.Component {
		render(){

			const {name,imageUri} = this.props.group;
			return (
				
	         <ListItem 
	         avatar
	         onPress = {() => this.props.navigation.push('ViewGroup', this.props.group)}>
	              <Left>
	                <Thumbnail source={{uri : imageUri}} />
	              </Left>
	              <Body>
	                 <Text>{name}</Text>
	              </Body>
            </ListItem>
		)
	}
}