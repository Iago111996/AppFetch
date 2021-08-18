import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import {
  LIGHT_BLUE,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_MEDIUM,
  WHITE,
} from '../styles/styles';

export const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: LIGHT_BLUE,
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE,
  },
});
