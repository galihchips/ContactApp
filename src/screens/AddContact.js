import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Form,
  Label,
  Item,
  Input,
  Button  
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { connect } from 'react-redux';

import { fetchContact } from '../actions/contact';

class AddContact extends Component{
  
  static navigationOptions = {
    header: null
  }

  constructor(){
    super();
    this.state = {
      nama: '',
      no: '',
      imageUri : 'http://zlatykuchar.cz/files/2018/01/silueta.jpg'
    }
  }

  handleSave(){
    axios({
      method: 'post',
      url: 'http://rest.learncode.academy/api/galih/listcontact',
      data: this.state
    }).then(()=>{
      this.props.dispatch(fetchContact());
      this.props.navigation.goBack();
    });
  }
  
  render(){
    return (
      <Container>
          <Header style={{backgroundColor :'#fff',borderBottomWidth : 0.5}}>
            <Left>
              <TouchableOpacity onPress = {() => this.props.navigation.goBack()} >
                <Icon 
                size ={30} 
                name ='ios-arrow-back'  />
              </TouchableOpacity>
            </Left>
            <Body style={{alignSelf: 'center'}}>
              <Text style={{fontSize : 15}}>Tambah Kontak Baru</Text>
            </Body>
            <Right>
              <TouchableOpacity onPress = {() => this.handleSave()} >
               <Icon
               style ={{marginRight : 20}}
               size ={30} 
               name = 'md-checkmark' />
              </TouchableOpacity>
            </Right>
        </Header>
        <Content>
            <Form>
                  <Item>
                    <Icon 
                      active name='ios-person' 
                      size ={30}
                    />
                    <Input 
                      style={{marginLeft : 30}}
                      placeholder='Nama'
                      onChangeText={(text)=>this.setState({nama: text})}
                    />
                  </Item>
                  <Item>
                    <Icon 
                      size ={30}
                      active name='ios-call' />
                    <Input 
                      keyboardType="numeric"
                      style={{marginLeft : 30}}
                      placeholder='Telepon'
                      onChangeText={(text)=>this.setState({no: text})}
                    />
                  </Item>
            </Form>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    data: state,
  }
}
export default connect(mapStateToProps)(AddContact);
