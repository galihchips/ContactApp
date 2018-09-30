import React from 'react';
import { ListItem, Thumbnail, Content, Body, Text, Left, CheckBox } from 'native-base';
import { View } from 'react-native';
export default class AddMemberList extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	selectedMember : []
	  };
	}

	onCheckBoxPress(id) {
    let tmp = this.state.selectedMember;

    if ( tmp.includes( id ) ) {
      tmp.splice( tmp.indexOf(id), 1 );
    } else {
      tmp.push( id );
    }

    this.setState({
      selectedMember: tmp
    });
  }

  		handleSaveMembers(){
		    axios({
		      method: 'post',
		      url: 'http://192.168.0.17:5000/api/groups/',
		      data: this.state
		    }).then(()=>{
		      this.props.dispatch(fetchContacts());

		    });
		  }

		render(){
			console.log(this.state)
			const {name, imageUri, status, phonenumber} = this.props.members;
			return (
	          <ListItem avatar>
		         	
		          	<Left>
		                <Thumbnail source={{uri : imageUri}} />
		              </Left>
		        	<Body>
		        		<Text>{name}</Text>
		        		<Text note>{status}</Text>
		        	</Body>
			        <Button 
			          full light
			          onPress = {() => this.handleSaveMembers()}>
			            <Text>Save</Text>
			        </Button>
            </ListItem>

		)
	}
}