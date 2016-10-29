import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    // note: second argument is initial state
    // third argument is store enhancer
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
}

export default App;
