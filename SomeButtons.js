/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const SomeButtons = props => {
  console.log(props);
  return (
    <View style={[styles.backgroundStyle, {backgroundColor: props.color}]}>
      <TouchableOpacity style={styles.buttonStyle} onPress={props.sumFunction}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={props.deductionFunction}>
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },

  backgroundStyle: {
    height: 200,
    justifyContent: ('center', 'space-around'),
    alignItems: 'center',
  },
});
export default SomeButtons;
