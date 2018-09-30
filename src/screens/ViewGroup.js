//IMPORT COMPONENT FROM REACT

import React, { Component } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Body, Text, List, ListItem, Thumbnail, Header, Left, Right, Button, Card, CardItem, Image, Title, Fab } from 'native-base';
import { View, FlatList} from 'react-native';
import axios from 'axios';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import ListsMembers from './componentList/ListsMembers';

//IMPORT FUNCTION
import { fetchContacts } from '../actions/contacts';
import { fetchGroups } from '../actions/groups';

class ViewGroup extends Component {
	static navigationOptions = {
	    header: null
	}

	ComponentDidMount(){
		this.props.dispatch(fetchContacts())
	}

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	imageUri : 'https://2.bp.blogspot.com/--0g-z78nUEk/Ws2ME7fuZfI/AAAAAAAAB-w/SvUgTcfHtqEnUNGNIdHLr2cuADvDc7f5ACLcBGAs/s320/jasa%2Bdesain%2Blogo%2B%25282%2529.png'
	  };
	}

  	handleDelete(id){
    axios.delete(`http://192.168.0.17:5000/api/groups/${id}`)
      .then(()=>{
        this.props.dispatch(fetchGroups());
        this.props.navigation.goBack();
      })
 	}

  	handleEdit(id){			 
		      axios({
			      method: 'put',
			      url: `http://192.168.0.17:5000/api/groups/${id}`,
			      data: this.state
			    }).then(()=>{
			      this.props.dispatch(fetchContacts());
			      this.props.navigation.goBack();
			    });
	}
	
	render(){
		console.log(this.props.contacts)
		const contact = this.props.contacts;
		const group = this.props.navigation.state.params;
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
				 	<Title style ={{color : '#fff'}}>Group Details</Title>
			 	</Body>
			 	<Right style ={{marginRight: 20}}>
			 		<View style={{marginRight:20}}>
				 		<TouchableOpacity 
				 		onPress={() => this.props.navigation.navigate('AddMember',group) }>
				 			<IonIcon name = 'ios-person-add' size ={25} color = '#fff'/>
				 		</TouchableOpacity>
				 	</View>
				 	<View>
				 		<TouchableOpacity 
				 		onPress={() =>  Alert.alert(
					      'Delete Groups',
					      'Are You Sure want to Delete?',
					      [
					        {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
					        {text: 'YES', onPress: () => this.handleDelete(group._id)},
					      ])}>
				 			<IonIcon name = 'md-trash' size ={25} color = '#fff'/>
				 		</TouchableOpacity>
				 	</View>
			 	</Right>
			</Header>
	        <Content>
				 	<Card>
			            <CardItem  style ={{alignSelf:'center',alignItems :'center', justifyContent:'center', backgroundColor: '#EEEEF0', width: '100%',borderBottomWidth: 0.3}}>
			              <Thumbnail
			              	source={{uri: group.imageUri}} style={{height: 200, width: 200}}
			              />
			            </CardItem>
			        </Card>
			        <Card>
			            <CardItem style ={{flex :1}}>
			            	<Left style ={{flex:0.1}}/>
			            	<Body style ={{flex:1}}>
			            		<Text style = {{fontSize : 18}}>{group.name}</Text>
			            	</Body>
			            	<Right>
			            		<TouchableOpacity onPress = {() => this.props.navigation.push('EditName',group)}>
			            			<MaterialCommunityIcon  name = 'pencil' size ={20}/>
			            		</TouchableOpacity>
			            	</Right>
			            </CardItem>
			        </Card>
			        <Card>
			            {this.props.groups.length > 0 ?
			        	<CardItem>
			            	<Content>
								<View>
							     		<Text style={{color:'#06ce00', marginLeft:13, marginTop:10}}>Member List</Text>
							    </View>
			            		<FlatList
				                  data={this.props.groups[0].contacts}
				                  keyExtractor={(item, index) => index.toString()}
				                  renderItem={({item, index}) => (
				                  	<View>
				                       <ListItem>
								              <Body>
								                 <Text>{item.name}</Text>
								                 
								              </Body>
							            </ListItem>
				                      </View>
				                    )}
				                />
			            	</Content>
			            </CardItem>
			            :
			            <CardItem>
			            	<View style ={{flex:1,flexDirection:'column',alignSelf:'center', justifyContent: 'center',alignItems:'center'}}>
				            	<Thumbnail 
									source = {{uri : 'https://st2.depositphotos.com/1010751/6391/v/950/depositphotos_63913861-stockillustratie-teamwerk-5-mensen-groepslogo.jpg'}}
									style={{height: 100, width: 100}}
								/>
								<Text
									style={{fontSize :14,marginTop:20,color: '#aaa'}}>
									No Member Founded
								</Text>
							</View>
			            </CardItem>
			        }
			        </Card>	        		 		
	        </Content>
      </Container>
		
		)
	}
}
const mapStateToProps = (state) => {
  return{
    groups: state.groups.groups,
    contacts : state.contacts.contacts
  }
}
export default connect(mapStateToProps)(ViewGroup);