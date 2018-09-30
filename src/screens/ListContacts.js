//IMPORT COMPONENT REACT, NATIVE BASE AND OTHER FROM COMPONENTS

import React, { Component } from 'react';
import { Container, Content, Text, Title, Header, Left, Body, Right, Fab, List, Button, Item, Input, Thumbnail } from 'native-base';
import { View, TouchableOpacity, StatusBar} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

//IMPORT FILE 
import ListsContacts from './componentList/ListsContacts';

//IMPORT FUNCTION 
import { connect } from 'react-redux';
import { fetchGroups } from '../actions/groups';
import { fetchContacts } from '../actions/contacts';


class ListContacts extends Component {

	componentDidMount(){
 		this.props.dispatch(fetchContacts()) 
	}

	static navigationOptions = {
    header: null
	}

	render(){
			return (
				<Container>
					<Header androidStatusBarColor="#048c00" style ={{backgroundColor : '#06ce00'}}>
						<Left />
						<Body>
							<Title style ={{color : '#fff'}}>List Contacts</Title>
						</Body>
					</Header>
					{this.props.contacts.length > 0 ?
						<Content>
							<Item style ={{width:'70%',alignSelf:'center'}}>
					          	<Input placeholder="Search Contact" />
					         </Item>
							<List>
								{this.props.contacts.map((contact, key) => <ListsContacts key ={key} contact = {contact} {...this.props} />)}
							</List>
							   
						</Content>
					: 
						<View style ={{flex:1,flexDirection:'column',alignSelf:'center', justifyContent: 'center',alignItems:'center'}}>
							<Thumbnail 
								source = {{uri : 'http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/addressbook-green-icon.png'}}
								style={{height: 100, width: 100}}
							/>

							<Text
								style={{fontSize :14,marginTop:20,color: '#aaa'}}>
								No Contacts Founded
							</Text>
						</View>
				}
					<Fab
			            style={{ backgroundColor: '#06ce00' }}
			            position="bottomLeft"
			            onPress={() => 
			            {this.props.dispatch(fetchGroups())
			            this.props.navigation.navigate('ListGroups')
			        	}}>
			            <FontAwesomeIcon name="group" size = {15}/>
			        </Fab>
					<Fab
			            style={{ backgroundColor: '#06ce00' }}
			            position="bottomRight"
			            onPress={() => this.props.navigation.push('AddContact')}>
			            <IonIcon name="md-add" size = {15}/>
			        </Fab>   
				</Container>
			)
	}
}
const mapStateToProps = (state) => {
  return{
    contacts: state.contacts.contacts
  }
}
export default connect(mapStateToProps)(ListContacts);