//IMPORT COMPONENT FROM REACT

import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Form, Label, Item, Input, Button, Title, Card, CardItem, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { connect } from 'react-redux';
import IonIcon from 'react-native-vector-icons/Ionicons';

//IMPORT FUNCTION
import { fetchGroups } from '../actions/groups';

class AddGroups extends Component{
  static navigationOptions = {
    header: null
  }

  constructor(){
    super();
    this.state = {
      groupname: '',
      imageUri : 'https://2.bp.blogspot.com/--0g-z78nUEk/Ws2ME7fuZfI/AAAAAAAAB-w/SvUgTcfHtqEnUNGNIdHLr2cuADvDc7f5ACLcBGAs/s320/jasa%2Bdesain%2Blogo%2B%25282%2529.png'
      
    }
  }

  validate(){
    if(this.state.name == '' ){
      Alert.alert("Please Input Group Name First")
    }  else {
      {this.handleSave()}
    }
  }

  handleSave(){
    axios({
      method: 'post',
      url: 'http://192.168.0.17:5000/api/groups/',
      data: this.state
    }).then(()=>{
      this.props.dispatch(fetchGroups());
      this.props.navigation.goBack();
    });
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
              style ={{borderWidth:1}}>
                <CardItem>
                  <Item>
                      <Icon 
                        size ={30}
                        active name='ios-person' />
                      <Input 
                        style={{marginLeft : 30}}
                        placeholder='Group Name'
                        onChangeText={(text)=>this.setState({name: text})}
                      />
                  </Item>
                </CardItem>
              </Card>
          </Content>
          <Button 
            full light
            onPress = {() => this.handleSave()}>
              <Text>Save</Text>
          </Button>
      </Container>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    groups: state.groups.groups
  }
}
export default connect(mapStateToProps)(AddGroups);