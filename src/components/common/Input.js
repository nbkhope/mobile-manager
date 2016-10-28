import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, placeholder, onChangeText, secureTextEntry }) => {
  const { containerStyle, labelStyle, inputStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        autoCapitalize={'none'}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    height: 40,
    alignItems: 'center'
  },
};

export { Input };
