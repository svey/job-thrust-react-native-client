import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';


import { CardSection, Card } from './common';


class Application extends Component {
  render() {
    const { company, title } = this.props.application;
    const { headerContentStyle, headerTextStyle } = styles;
    
    return (
      <Card>
        <CardSection>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{company}</Text>
          </View>
        </CardSection>
      </Card>
    );  
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 20
  }
};


export default connect(null)(Application);
