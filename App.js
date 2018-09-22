import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import HomeContact from './src/screens/HomeContact';
import ListContact from './src/screens/ListContact';
import AddContact from './src/screens/AddContact';
import ViewScreen from './src/screens/ViewScreen';
import EditScreen from './src/screens/EditScreen';

import store from './src/store';

const Root = createStackNavigator({
  HomeContact: {
    screen: HomeContact,
    navigationOptions: {
      title: 'Home'
    }
  },
  ListContact : {
    screen : ListContact,
    navigationOptions: {
      title: 'List Contact'
    }
  },
  AddContact : {
    screen : AddContact,
    navigationOptions: {
      title: 'Add Contact'
    }
  },
  ViewScreen : {
    screen : ViewScreen,
    navigationOptions: {
      title: 'View Contact'
    }
  },
  EditScreen : {
    screen : EditScreen,
    navigationOptions: {
      title: 'Edit Contact'
    }
  }
}, {
  initialRouteName: 'ListContact'
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