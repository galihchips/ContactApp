import React, {Component} from 'react';
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
	Right,
	Button
} from 'native-base';
import {
	View
} from 'react-native';
import axios from 'axios';
import data from '../reducers/contact';
import { getContact, fetchContact } from '../actions/contact';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

class ViewScreen extends Component {
	static navigationOptions = {
    header: null
}
	componentDidMount(){
 		this.props.dispatch(fetchContact(this.props.params))
}
handleDelete(id){
    axios.delete(`http://rest.learncode.academy/api/galih/listcontact/${id}`)
      .then(()=>{
        this.props.dispatch(fetchContact());
        this.props.navigation.goBack();
      })
  }
	render(){
		const contact = this.props.navigation.state.params;

		return (
		<Container>
        <Content>
	        	<Header style={{backgroundColor :'#fff',borderBottomWidth : 0.5}}>
	        			<Left>
			 				<TouchableOpacity onPress = {() => this.props.navigation.goBack()} >
				                <Icon 
				                size ={30} 
				                name ='ios-arrow-back'  />
				            </TouchableOpacity>
				        </Left>
		 				<Body style={{alignSelf: 'center'}}>
			 				<Text style={{fontSize : 20}}>Detail Kontak</Text>
		 				</Body>
		 		</Header>
	            <List>
	            	 <ListItem thumbnail
	            	  style ={{flex:1}}
	            	 >
			              <Left style ={{flex:0.8}}>
			                <Thumbnail square source={{ uri: contact.imageUri }} />
			              </Left>
			              <Body style ={{flex:3}}>
			                <Text>{contact.nama}</Text>
			                <Text note>{contact.no}</Text>
			              </Body>
			              <Right  style ={{flex:1,flexDirection : 'row'}}>
			              	<View>
				              <TouchableOpacity onPress = {() => this.handleDelete(contact.id)}>
				              	<Icon name = 'md-trash' size = {20} />
				              </TouchableOpacity>
				            </View>
				            <View style= {{marginLeft:20}}>
				              <TouchableOpacity onPress = {() => this.props.navigation.navigate('EditScreen', contact)}>
				              	<Icon name = 'md-create' size = {20} />
				              </TouchableOpacity>
				            </View>
			              </Right>
			         </ListItem>
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
export default connect(mapStateToProps)(ViewScreen);