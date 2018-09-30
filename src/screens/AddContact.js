//IMPORT COMPONENT FROM REACT NATIVE 
import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Form, Label, Item, Input, Button, Title, Card, CardItem, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { connect } from 'react-redux';
import IonIcon from 'react-native-vector-icons/Ionicons';


//IMPORT FUNCTION
import { createContact } from '../actions/contacts';

class AddContact extends Component{
  static navigationOptions = {
    header: null
  }

  constructor(){
    super();
    this.state = {
      name: '',
      phonenumber: '',
      imageUri : 'https://thumbs.dreamstime.com/b/ic-ne-de-signe-d-utilisateur-symbole-de-personne-avatar-humain-84519083.jpg',
      status : 'Ada',
      groupName: 'Bootcamp 4'
    }
  }

  validate(){
    if(this.state.name == '' ){
      Alert.alert("Please Input Name First")
    } else if (this.state.phonenumber == ''){
      Alert.alert("Please Input Number First")
    } else {
      {this.handleSave()}
    }
  }

  handleSave(){
    this.props.dispatch(createContact(this.state))
    this.props.navigation.goBack()
  }
  
  render(){
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
            <Body>
              <Title style ={{color : '#fff'}}>Add Contact</Title>
            </Body>
          </Header>
          <Content>
            <Card
            transparent
            style ={{borderWidth:1}} 
            >
              <CardItem>
                <Item>
                    <Icon 
                      size ={25}
                      active name='ios-person' />
                    <Input 
                      style={{marginLeft : 30,width:'30%'}}
                      placeholder='Name'
                      onChangeText={(text)=>this.setState({name: text})}
                    />
                </Item>
              </CardItem>
              <CardItem>
                  <Item>
                    <Icon 
                      size ={25}
                      active name='ios-call' />
                    <Input
                      maxLength = {13}
                      keyboardType="numeric"
                      style={{marginLeft : 30,width:'30%'}}
                      placeholder='Phone Number'
                      onChangeText={(text)=>this.setState({phonenumber: text})}
                    />
                  </Item>
              </CardItem>
            </Card>
        </Content>
        <Button 
          full light
          onPress = {() => this.validate()}>
            <Text>Save</Text>
        </Button>
      </Container>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    contact: state.contacts.contact
  }
}
export default connect(mapStateToProps)(AddContact);