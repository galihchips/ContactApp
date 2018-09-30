//IMPORT COMPONENT FROM REACT

import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, Body, Text, List, ListItem, Thumbnail, Header, Left, Right, Button, Card, CardItem, Image, Title, Form, Item, Label, Input, Footer } from 'native-base';
import { View } from 'react-native';
import axios from 'axios';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

//IMPORT FUNCTION

import { fetchContacts } from '../actions/contacts';
import { connect } from 'react-redux';

class Status extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	status : this.props.navigation.state.params.status
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
			      this.props.navigation.pop();
			    });
	}

	ada = () => {
      this.setState({status: 'Ada'})
   }
	sibuk = () => {
      this.setState({status: 'Sibuk'})
   }
	render(){
		const contact = this.props.navigation.state.params
		return (
				<Container>
					<Header androidStatusBarColor="#048c00" style ={{backgroundColor : '#06ce00'}}>
				        <Left />
					 	<Body style={{alignSelf: 'center'}}>
						 	<Title style ={{color : '#fff'}}>Info</Title>
					 	</Body>
					</Header>
					<Content>
						<Card>
							<CardItem borderd>
								<View>
									<Text style ={{fontSize: 14,color :'#048c00'}}>Your Status</Text>
								</View>
							</CardItem>
							<CardItem borderd>
								<View>
									<Text>{this.state.status}</Text>
								</View>
							</CardItem>
						</Card>
						<Card>
							<CardItem bordered>
								<View>
									<Text style ={{fontSize: 14,color :'#048c00'}}>Choose Your Status</Text>
								</View>
							</CardItem>
							<List>
						            <ListItem onPress = {this.ada}>
						              <Text>Ada</Text>
						            </ListItem>
						            <ListItem onPress = {this.sibuk}>
						              <Text>Sibuk</Text>
						            </ListItem>
						    </List>
						</Card>
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
export default connect(mapStateToProps)(Status);