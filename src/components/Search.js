import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { searchUpdate, searchQuery } from '../actions';


class Search extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Job Title"
            placeholder="Software Engineer"
            value={this.props.query}
            onChangeText={query => this.props.searchUpdate({ prop: 'query', value: query })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Location"
            placeholder="San Francisco"
            value={this.props.location}
            onChangeText={location => this.props.searchUpdate({ prop: 'location', value: location })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.props.searchQuery.bind(null, { query: this.props.query, location: this.props.location })}>
            Search
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { query, location, results } = state.searchForm;

  return { query, location, results };
};

export default connect(mapStateToProps, { searchUpdate, searchQuery })(Search);

