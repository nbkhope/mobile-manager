import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    // Set up Firebase
    const config = {
      apiKey: "AIzaSyAvHsYxZJePZHlP3waiTt1dau-8lVi4S4w",
      authDomain: "mobile-manager-3759a.firebaseapp.com",
      databaseURL: "https://mobile-manager-3759a.firebaseio.com",
      storageBucket: "mobile-manager-3759a.appspot.com",
      messagingSenderId: "282406463378"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)} >
        <View>
          <Text>
            Manager App
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
