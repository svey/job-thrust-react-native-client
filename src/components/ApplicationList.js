import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { applicationGetAll } from '../actions';

import { CardSection, Card, Button } from './common';


class ApplicationList extends Component {
  componentWillMount() {
    this.props.applicationGetAll(this.props.id);
  }

  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection>
          <Text>{this.props.email}</Text>
        </CardSection>
        <CardSection>
          <Text>ApplicationList</Text>
        </CardSection>
        <CardSection>
          <Text>ApplicationList</Text>
        </CardSection>
        <CardSection>
          <Text>ApplicationList</Text>
        </CardSection>
        <CardSection>
          <Text>ApplicationList</Text>
        </CardSection>
        <CardSection>
          <Button onPress={Actions.applicationCreate}>
            Add Application
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, id } = state.authenticationInformation.user;

  return { email, id };
};

export default connect(mapStateToProps, { applicationGetAll })(ApplicationList);
//export default connect(mapStateToProps)(ApplicationList);
