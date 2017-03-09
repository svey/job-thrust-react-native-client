import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleSigninButton } from 'react-native-google-signin';

//import components && actions
import { Card, CardSection, Button } from './common';
import { googleAuthSignin, googleAuthSignout } from '../actions';


class LoginForm extends Component {
  //google auth signin request => see GoogleAuthActions
  signIn() {
    this.props.googleAuthSignin();
  }

  signOut() {
    this.props.googleAuthSignout();
  }

  renderButton() {
    if (this.props.user) {
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

const mapStateToProps = (state) => {
  const { user } = state.authenticationInformation;
  return { user };
};

export default connect(mapStateToProps, { googleAuthSignin, googleAuthSignout })(LoginForm);
