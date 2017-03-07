import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
//import components
import { CardSection } from './common';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  //google auth signin request
  signIn() {
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      Actions.applications({ user });
    })
    .catch((err) => {
      console.log('Google Authentication Failed: ', err);
    })
    .done();
  }

  render() {
    return (
      <CardSection style={styles.container}>
        <GoogleSigninButton
          style={{ width: 230, height: 48 }}
          color={GoogleSigninButton.Color.Dark}
          size={GoogleSigninButton.Size.Standard}
          onPress={() => { this.signIn(); }}
        />
      </CardSection>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'column',
    alignItems: 'center' 
  }
};

export default LoginForm;
