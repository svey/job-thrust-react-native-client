import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';


import { CardSection, Card, Popup } from './common';


class Application extends Component {
  state = { showModal: false }
  render() {
    const { company, title } = this.props.application;
    const { headerContentStyle, headerTextStyle } = styles;
    
    return (
      <TouchableOpacity onPress={() => this.setState({ showModal: !this.state.showModal })}>
        <Card>
          <CardSection>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{title}</Text>
              <Text>{company}</Text>
            </View>
          </CardSection>
          <Popup
            onPress={() => this.setState({ showModal: !this.state.showModal })}
            visible={this.state.showModal}
            onRequestClose={() => {}}
          >{`${title} ${company}`}
          </Popup>
        </Card>
      </TouchableOpacity>
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
