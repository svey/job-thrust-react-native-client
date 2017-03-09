import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection, Card, Button } from './common';


class ApplicationList extends Component {
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

// const mapStateToProps = (state) => {
//   console.log(state)
//   const { user } = state.user;

//   return { user };
// };

// export default connect(mapStateToProps)(ApplicationList);

export default  ApplicationList;
