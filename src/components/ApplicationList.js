import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection, Card, Button } from './common';


class ApplicationList extends Component {
  render() {
    return (
      <Card>
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

const styles = {
  container: {
    flexDirection: 'column',
    alignItems: 'center' 
  }
};

export default ApplicationList;
