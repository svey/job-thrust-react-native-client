import React, { Component } from 'react';
import { GoogleSigninButton } from 'react-native-google-signin';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';

import { googleAuthSignin, googleAuthSignout } from '../actions';
import { Card, CardSection, Button } from './common';
import favicon from '../favicon.png';


class LoginForm extends Component {
  signIn() {   //google auth signin request => see GoogleAuthActions
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
      <View style={styles.thumbnailContainerStyle}>
        <Image style={styles.thumbnailStyle} source={favicon} />
        {this.renderButton()}
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'column',
    alignItems: 'center' 
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 100,
    flex: 1,
    width: null
  }
};

const mapStateToProps = (state) => {
  const { user } = state.authenticationInformation;
  return { user };
};

export default connect(mapStateToProps, { googleAuthSignin, googleAuthSignout })(LoginForm);
