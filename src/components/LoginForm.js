import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
//import components
import { Card, CardSection, Button } from './common';


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
      this.setState({ user });
      Actions.applications({ user });
    })
    .catch((err) => {
      console.log('Google Authentication Failed: ', err);
    })
    .done();
  }

  signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({ user: null });
    })
    .done();
  }

  renderButton() {
    if (this.state.user || this.props.user) {
      return (
        <CardSection>
          <Button onPress={this.signOut.bind(this)}>
            Logout
          </Button>
        </CardSection>
      );
    }
    return (
      <CardSection style={styles.container}>
        <GoogleSigninButton
          style={{ width: 230, height: 48 }}
          color={GoogleSigninButton.Color.Dark}
          size={GoogleSigninButton.Size.Icon}
          onPress={() => { this.signIn(); }}
        />
      </CardSection>
    );
  }

  render() {
    return (
      <Card>
        {this.renderButton()}
      </Card>
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
