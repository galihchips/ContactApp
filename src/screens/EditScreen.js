import React, { Component } from 'react';
import {
	Container,
	Content,
	Header,
	Left,
	Body,
	Right,
	Text,
	Button,
	Form,
	Input,
	Item,
	Label
} from 'native-base';
import {
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import t from 'tcomb-form-native';
import {connect} from 'react-redux';
import axios from 'axios';
import {fetchContact} from '../actions/contact';

class EditScreen extends Component {
	static navigationOptions = {
    header: null
}
		constructor(props) {
		  super(props);
		
		  this.state = {
		  	nama: this.props.navigation.state.params.nama,
      		no: this.props.navigation.state.params.no,
      		imageUri : 'http://zlatykuchar.cz/files/2018/01/silueta.jpg'
		  };
		}


		handleEdit(id){			 
		      axios({
			      method: 'put',
			      url: `http://rest.learncode.academy/api/galih/listcontact/${id}`,
			      data: this.state
			    }).then(()=>{
			      this.props.dispatch(fetchContact());
			      this.props.navigation.popToTop();
			    });
}
	render(){
		 const contact= this.props.navigation.state.params;
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
				              <Text style={{fontSize : 15}}>Edit Kontak</Text>
				            </Body>
				            <Right>
				              <TouchableOpacity onPress = {() => this.handleEdit(contact.id)} >
				               <Icon
				               style ={{marginRight : 20}}
				               size ={30} 
				               name = 'md-checkmark' />
				              </TouchableOpacity>
				            </Right>
				        </Header>
						<Form>
				            <Item floatingLabel>
				              <Label>Nama</Label>
				              <Input 
				              value = {this.state.nama}
				              onChangeText={(text)=>this.setState({nama: text})}
				              />
				            </Item>
				            <Item floatingLabel>
				              <Label>No Telepon</Label>
				              <Input
				              keyboardType="numeric" 
				              value = {this.state.no}
				              onChangeText={(text)=>this.setState({no: text})}
				              />
				            </Item>
				          </Form>
					</Content>
				</Container>
			)
	}
}
const mapStateToProps= (state) => {
  return{
    data : state
  }
}

export default connect(mapStateToProps)(EditScreen)