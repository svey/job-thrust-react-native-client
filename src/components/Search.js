import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { applicationUpdate, applicationSearch } from '../actions';


class Search extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Query"
            placeholder="Software Engineer"
            value={this.props.query}
            onChangeText={query => this.props.applicationUpdate({ prop: 'query', value: query })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Location"
            placeholder="San Francisco"
            value={this.props.location}
            onChangeText={location => this.props.applicationUpdate({ prop: 'location', value: location })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={applicationSearch}>
            Search
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { query, location, results } = state.applicationForm;

  return { query, location, results };
};

export default connect(mapStateToProps, { applicationUpdate })(Search);

