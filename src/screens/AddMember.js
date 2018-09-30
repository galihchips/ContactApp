//IMPORT COMPONENT FROM REACT NATIVE 
import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Alert, Image, FlatList, ListView } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Form, Label, Item, Input, Button, Title, Card, CardItem, Thumbnail, List, ListItem } from 'native-base';
import CheckBox from 'react-native-checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { connect } from 'react-redux';
import IonIcon from 'react-native-vector-icons/Ionicons';
//IMPORT FUNCTION
import { fetchContacts } from '../actions/contacts';


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class AddMember extends Component{
  static navigationOptions = {
    header: null
  }


  constructor(){
    super();

    
    this.state = {
      checked : false,
      selectedMember : []
    };
  }

  ComponentDidMount(){
    this.props.dispatch(fetchContacts())
  }


  handleSaveMembers(id){
    console.log(this.state.selectedMember)
    axios({
      method: 'put',
      url: `http://192.168.0.17:5000/api/groups/${id}`,
      data: {contacts : this.state.selectedMember}
    }).then(()=>{
      this.setState({
        selectedMember : []
      })
      this.props.dispatch(fetchContacts());

    });
  }

   press = (id, check) => {
    const data = this.state.selectedMember
    if(check == false ){
      data.push(id)
    } else if (check == true) {
      data.splice(data.indexOf(data), 1 );
    }
    this.setState({
      selectedMember : data,
      checked : !check
    })
  }
  
  validate(){
    if(this.state.selectedMember == '' ){
      Alert.alert("Please Check the Contacts")
    }  else {
      {this.handleSaveMembers(id)}
    }
  }

    renderRow(item) {
            return (
              <ListItem avatar>              
                <Left>
                    <Thumbnail source={{uri : item.imageUri}} />
                  </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.status}</Text>
              </Body>
              <CheckBox
              label = ''
                checked={this.checked}
                onChange= {(check) => this.press(item._id, check)}
              />
            </ListItem>
            );
    }

  render(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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
              <Title style ={{color : '#fff'}}>Add Members</Title>
            </Body>
          </Header>
          <Content>
            <Card
            transparent
            style ={{borderWidth:1}} 
            > 
                <ListView
                  dataSource={ds.cloneWithRows(this.props.contacts)}
                  renderRow={(item) => this.renderRow(item)} 
                />
            </Card>

        </Content>
        <Button 
          full light
          onPress = {() => this.handleSaveMembers(this.props.navigation.state.params._id)}>
            <Text>Save</Text>
        </Button>
      </Container>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    contacts : state.contacts.contacts
  }
}
export default connect(mapStateToProps)(AddMember);