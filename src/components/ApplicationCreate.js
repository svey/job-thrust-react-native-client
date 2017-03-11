import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import axios from 'axios';


import { Card, CardSection, Input, Button } from './common';
import { applicationUpdate, applicationAdd } from '../actions';


class ApplicationCreate extends Component {
  applicationAdd(title, description, company) {
    const id = this.props.id;
    const url = 'http://custom-env.a2uvfbnd4f.us-west-2.elasticbeanstalk.com/api/job/';
    
    this.instance(url, id).post('', { title, description, company })
      .then(() => Actions.applications({ type: 'reset' }));
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
    return (
      <Card>
        <CardSection>
          <Input
            label="Company"
            placeholder="JobThrust"
            value={this.props.company}
            onChangeText={company => this.props.applicationUpdate({
              prop: 'company',
              value: company
            })}
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
          <Button
            onPress={this.applicationAdd.bind(
              this,
              this.props.title,
              this.props.snippet,
              this.props.company,
              // this.props.stageId
            )}
          >
            Add App
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
  const { id } = state.authenticationInformation.user;

  return { company, title, stage, id };
};

export default connect(mapStateToProps, { applicationUpdate, applicationAdd })(ApplicationCreate);
