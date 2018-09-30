import React, { Component } from 'react';
import { Container, Content, Text, Title, Header, Left, Body, Right, Fab, List, Button, Item, Input, CardItem, Thumbnail } from 'native-base';
import { View, TouchableOpacity, StatusBar} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import ListsGroups from './componentList/ListsGroups';

class ListGroups extends Component {
	ComponentDidMount(){
		
	}
	
	static navigationOptions = {
    header: null
	}
	
	render(){
		console.log(this.props.groups)
		return (
				<Container>
					<Header androidStatusBarColor="#048c00" style ={{backgroundColor : '#06ce00'}}>
						<Left />
						<Body>
							<Title style ={{color : '#fff'}}>List Groups</Title>
						</Body>
					</Header>
					{this.props.groups.length > 0 ?
					<Content>
						<List>
							{this.props.groups.map((group, key) => <ListsGroups key ={key} group = {group} {...this.props} />)}
						</List>
					</Content>
					:
			            	<View style ={{flex:1,flexDirection:'column',alignSelf:'center', justifyContent: 'center',alignItems:'center'}}>
				            	<Thumbnail 
									source = {{uri : 'https://st2.depositphotos.com/1010751/6391/v/950/depositphotos_63913861-stockillustratie-teamwerk-5-mensen-groepslogo.jpg'}}
									style={{height: 100, width: 100}}
								/>
								<Text
									style={{fontSize :14,marginTop:20,color: '#aaa'}}>
									No Groups Founded
								</Text>
							</View>
				}
					<Fab
				            style={{ backgroundColor: '#06ce00' }}
				            position="bottomRight"
				            onPress={() => this.props.navigation.push('AddGroups')}>
				            <IonIcon name="md-add" size = {15}/>
				        </Fab>
				</Container>
			)
	}
}
const mapStateToProps = (state) => {
  return{
    groups: state.groups.groups
  }
}
export default connect(mapStateToProps)(ListGroups);