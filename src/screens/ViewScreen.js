 //IMPORT COMPONENT FROM REACT

import React, {Component} from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { Container , Content, Body, Text, List, ListItem, Thumbnail, Header, Left, Right, Button, Card, CardItem, Image, Title, Fab } from 'native-base';
import { View } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';


//IMPORT FUNCTION
import { fetchContacts, deleteContact } from '../actions/contacts';

class ViewScreen extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	
	  };
	}
  	
  	static navigationOptions = {
	    header : null
	}

	handleDelete(id){
	    this.props.dispatch(deleteContact(id))
	    this.props.navigation.popToTop()
	}

	render(){
		const contact = this.props.contacts;
		return (
		<Container>
	     	<Header androidStatusBarColor="#048c00" style ={{backgroundColor : '#06ce00'}}>
		        <Left>
				 	<TouchableOpacity onPress = {() => this.props.navigation.goBack()} >
					  	<IonIcon 
					  	size ={30} 
					  	name ='ios-arrow-back'
					  	color = '#fff'  />
					</TouchableOpacity>
				</Left>
			 	<Body style={{alignSelf: 'center'}}>
				 	<Title style ={{color : '#fff'}}>Profile</Title>
			 	</Body>
			 	<Right style ={{marginRight: 20}}>
			 		<TouchableOpacity 
			 		onPress={() =>  Alert.alert(
				      'Delete Contact',
				      'Are You Sure want to Delete?',
				      [
				        {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
				        {text: 'YES', onPress: () => this.handleDelete(contact._id)},
				      ]
				    )}>
			 			<IonIcon name = 'md-trash' size ={25} color = '#fff'/>
			 		</TouchableOpacity>
			 	</Right>
			</Header>
	        <Content>
				 	<Card transparent>
			            <CardItem  style ={{alignSelf:'center',alignItems :'center', justifyContent:'center', backgroundColor: '#fff', width: '100%',borderBottomWidth: 0.3}}>
			              <Thumbnail
			              	source={{uri: contact.imageUri}} style={{height: 200, width: 200}}
			              />	
			            </CardItem>
			            <CardItem style ={{flex :1}}>
			            	<Left style ={{flex:0.1}}/>
			            	<Body style ={{flex:1}}>
			            		<Text style = {{fontSize : 20}}>{contact.name}</Text>
			            	</Body>
			            	<Right />
			            </CardItem>
			            <CardItem  style ={{alignSelf:'center',alignItems :'center', justifyContent:'center', backgroundColor: '#eee', width: '100%'}}>
			              <Text style ={{fontSize: 14}}>This isn't your pin or name account. This name will be seen by your ContactApp</Text>
			            </CardItem>
			            <View>
			            	<Text style={{color:'#06ce00', marginLeft:13, marginTop:10}}>Info and Phone Number</Text>
			            </View>
			            
				            <CardItem style={{flex:0.4}} bordered>
									<Body>
										<Text>{contact.status}</Text>
									</Body>
							</CardItem>
						
							<CardItem bordered style ={{flex:0.2}}>
									<Body>
											<Text>{contact.phonenumber}</Text>										
									</Body>
							</CardItem>
						
						<View>
			            	<Text style={{color:'#06ce00', marginLeft:13, marginTop:10}}>Group List</Text>
			            </View>
			        </Card>	        		 		
	        </Content>
	        		<Fab
			            style={{ backgroundColor: '#06ce00' }}
			            position="bottomRight"
			            onPress={() => this.props.navigation.push('EditInfo', contact)}>
			            <MaterialCommunityIcon  name = 'pencil' size = {15}/>
			        </Fab>
      </Container>
			)
	}
}
const mapStateToProps = (state) => {
  return{
    contacts: state.contacts.contact
  }
}
export default connect(mapStateToProps)(ViewScreen);