import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  render() {
    if (!this.state.user) {
      return (
        <View style={styles.container}>
          <GoogleSigninButton
            style={{ width: 120, height: 44 }}
            color={GoogleSigninButton.Color.Light}
            size={GoogleSigninButton.Size.Icon}
            onPress={() => { this._signIn(); }}/>
        </View>
      );
    }

    if (this.state.user) {
      return (
        <View style={styles.container}>
          <Text
            style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 20
            }}
          >
            Welcome {this.state.user.name}
          </Text>
          <Text>
            Your email is: {this.state.user.email}
          </Text>

          <TouchableOpacity onPress={() => {this._signOut(); }}>
            <View style={{ marginTop: 50 }}>
              <Text>Log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/calendar'],
        webClientId: '689104807773-p626rgub1dnf6srurpg3heslnugk59m1.apps.googleusercontent.com',
        offlineAccess: true
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({ user });
    }
    catch(err) {
      console.log('Play services error', err.code, err.message);
    }
  }

  _signIn() {
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.setState({ user });
      Actions.main();
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }

  _signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({ user: null });
    })
    .done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default LoginForm;

/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleSigninButton, GoogleSignin } from 'react-native-google-signin';
import { Text } from 'react-native';


import { googleAuth } from '../actions';
import { CardSection } from './common';


class GoogleLoginForm extends Component {
  componentDidMount() {
    this.setupGoogleSignin();
  }

  setupGoogleSignin() {
    GoogleSignin.hasPlayServices({ autoResolve: true });
    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/calendar'],
        webClientId: '867788377702-gmfcntqtkrmdh3bh1dat6dac9nfiiku1.apps.googleusercontent.com',
        offlineAccess: true
      });
  }

  signIn() {
    this.props.googleAuth();
  }
  
  render() {
    return (
      <CardSection style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
          JobThrust
        </Text>

        <GoogleSigninButton
          style={{ width: 120, height: 44 }}
          color={GoogleSigninButton.Color.Dark}
          size={GoogleSigninButton.Size.Icon}
          onPress={() => { this.signIn(); }}
        />
      </CardSection>
    );
  }
}

const mapStateToProps = ({ signin }) => {
  const { email, user, loading, error } = signin;
  return {
    email, // { email: email } shortcut in ES6
    user,
    loading,
    error
  };
};

export default connect(mapStateToProps, { googleAuth })(GoogleLoginForm);*/
