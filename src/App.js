import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { GoogleSignin } from 'react-native-google-signin';
import { Actions } from 'react-native-router-flux';

import reducers from './reducers';
import Router from './Router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.setupGoogleSignin();
  }

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />         
      </Provider>
    );
  }

  async setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/calendar'],
        webClientId: '689104807773-p626rgub1dnf6srurpg3heslnugk59m1.apps.googleusercontent.com',
        offlineAccess: true
      });

      const user = await GoogleSignin.currentUserAsync();
      document.cookie = `jobTrustNative=true; passport: { user: ${user.id} }`;
      Actions.applications({ user });
    }
    catch (err) {
      console.log('Play services error', err.code, err.message);
    }
  }
}

export default App;
