import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import theme from '../styles/theme';

const Button = (props) => {
  const filledBgColor = props.color || theme.colors.primary;
  const outlinedColor = "#053f5c";
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? theme.colors.white : theme.colors.primary;

  return (
  <TouchableOpacity style={{
    ...styles.button,
    ...{backgroundColor: "#053f5c"},
    ...props.style
  }}
  onPress={props.onPress}>
    <Text style={{fontSize: 18, ...{ color: '#ffff'}}}>{props.title}</Text>
  </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button:{
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: "#053f5c",
    borderWidth: 2,
    borderRadius: 12,
    alignItems:'center',
    justifyContent:'center  '
    }
})
export default Button