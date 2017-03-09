import React from 'react';
import { Text, View, Linking } from 'react-native';
import { Card, CardSection, Button } from './common';

const SearchResult = ({ result }) => {
  const { city, company, jobtitle, url, snippet } = result;
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

        <Button onPress={() => Linking.openURL(url)}>
          Add
        </Button>

        <Button onPress={() => Linking.openURL(url)}>
          Remove
        </Button>
      </CardSection>
    </Card>
  );
};

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

export default SearchResult;
