import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { applicationUpdate } from '../actions';

class ApplicationCreate extends Component {
  

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Company"
            placeholder="JobThrust"
            value={this.props.company}
            onChangeText={company => this.props.applicationUpdate({ prop: 'company', value: company })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Title"
            placeholder="Software Engineer"
            value={this.props.title}
            onChangeText={title => this.props.applicationUpdate({ prop: 'title', value: title })}
          />
        </CardSection>

        <CardSection style={{ alignItems: 'center' }}>
          <Text style={styles.pickerTextStyle}>Stage</Text>
          <Picker
            style={{ flex: 2 }}
            selectedValue={this.props.stage}
            onValueChange={stage => this.props.applicationUpdate({ prop: 'stage', value: stage })}
          >
            <Picker.Item label="Interested" value={0} />
            <Picker.Item label="Applied" value={1} />
            <Picker.Item label="Phone Screen" value={2} />
            <Picker.Item label="On-Site" value={3} />
            <Picker.Item label="Decision" value={4} />
            <Picker.Item label="Offered" value={5} />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>
            Add
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
  }
};

const mapStateToProps = (state) => {
  const { company, title, stage } = state.applicationForm;

  return { company, title, stage };
};

export default connect(mapStateToProps, { applicationUpdate })(ApplicationCreate);
