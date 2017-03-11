import React, { Component } from 'react';
import { Text, View, Modal, Picker } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Popup = ({ children, visible, onPress, onRequestClose }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;
  return (
    <Modal
      animationType="slide"
      onRequestClose={onRequestClose}
      transparent
      visible={visible}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>
        <CardSection>
          <Picker
            style={{ flex: 2 }}
            //selectedValue={this.props.stage}
            //onValueChange={stage => this.props.applicationUpdate({ prop: 'stage', value: stage })}
          >
            <Picker.Item label="Interested" value={0} />
            <Picker.Item label="Applied" value={1} />
            <Picker.Item label="Phone Screen" value={2} />
            <Picker.Item label="On-Site" value={3} />
            <Picker.Item label="Decision" value={4} />
            <Picker.Item label="Offered" value={5} />
          </Picker>
          <Button onPress={onPress}>Save</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Popup };
