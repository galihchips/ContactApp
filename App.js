import React, { Component } from 'react';

import {createStackNavigator} from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ListContacts from './src/screens/ListContacts';
import ListGroups from './src/screens/ListGroups';
import ViewScreen from './src/screens/ViewScreen';
import ViewGroup from './src/screens/ViewGroup';
import AddGroups from './src/screens/AddGroups';
import AddContact from './src/screens/AddContact';
import AddMember from './src/screens/AddMember';
import EditScreen from './src/screens/EditScreen';
import EditInfo from './src/screens/EditInfo';
import SplashScreen from './src/screens/SplashScreen';
import Status from './src/screens/Status';

import store from './src/store';
import { Provider } from 'react-redux';
 //import store from './src/store';

const Root = createStackNavigator({
  ListContacts: {
    screen: ListContacts,
  },
  ListGroups: {
    screen: ListGroups,
  },
  ViewScreen : {
    screen : ViewScreen,
  },
  ViewGroup : {
    screen : ViewGroup,
  },
  AddContact : {
    screen : AddContact
  },
  AddGroups : {
    screen : AddGroups
  },
  AddMember : {
    screen : AddMember
  },
  EditScreen : {
    screen : EditScreen
  },
  Splash : {
    screen : SplashScreen
  },
  Status : {
    screen : Status
  },
  Status : {
    screen : Status
  },
  EditInfo : {
    screen : EditInfo
  }
}, {
      initialRouteName : 'ListContacts',
});

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

export default App;