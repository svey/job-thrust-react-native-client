import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { GoogleSignin } from 'react-native-google-signin';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentDidMount() {
    this.setupGoogleSignin();
  }

  setupGoogleSignin() {
    GoogleSignin.hasPlayServices({ autoResolve: true });
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/calendar', 'https://mail.google.com/'],
      webClientId: '689104807773-p626rgub1dnf6srurpg3heslnugk59m1.apps.googleusercontent.com',
      offlineAccess: true
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
