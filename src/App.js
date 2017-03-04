import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDGvS8IzA_xrOfsV2sgN4WM4B_f0deWXBg',
      authDomain: 'manager-668ea.firebaseapp.com',
      databaseURL: 'https://manager-668ea.firebaseio.com',
      storageBucket: 'manager-668ea.appspot.com',
      messagingSenderId: '1094515681059'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />         
      </Provider>
    );
  }
}

export default App;
