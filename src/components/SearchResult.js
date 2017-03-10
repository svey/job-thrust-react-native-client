import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import { Card, CardSection, Button } from './common';

class SearchResult extends Component {

applicationAdd(title, description, company) {
  const id = this.props.id;
  const url = 'http://custom-env.a2uvfbnd4f.us-west-2.elasticbeanstalk.com/api/job/';
  this.instance(url, id).post('', { title, description, company })
    .then(response => console.log('job added: ', response));    
}

instance(url, id) {
  return (
    axios.create({
      baseURL: url,
      headers: { 'Job-Thrust-Native': id }
    })
  );
}

  render() {
    const { city, company, jobtitle, url, snippet } = this.props.result;
    const { headerContentStyle, headerTextStyle } = styles;

    return (
      <Card>
        <CardSection>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{jobtitle}</Text>
            <Text>{city}</Text>
            <Text>{company}</Text>
            <Text>{snippet.replace(/\//g,'').replace(/<b>/g, '')}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Button onPress={() => Linking.openURL(url)}>
            View
          </Button>

          <Button onPress={this.applicationAdd.bind(this, jobtitle, snippet, company)}>
            Add
          </Button>

          <Button onPress={() => Linking.openURL(url)}>
            Remove
          </Button>
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
    fontSize: 18
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
    height: 300,
    flex: 1,
    width: null
  }
};

const mapStateToProps = (state) => {
  const { email, id } = state.authenticationInformation.user;
  return { email, id };
};

export default connect(mapStateToProps)(SearchResult);
