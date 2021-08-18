import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  COLOR_BACKGROUND,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_XX_LARGE,
  FONT_SIZE_SMALL,
  LIGHT_BLUE,
} from '../../styles/styles';

const Header = () => {
  return (
    <>
      <View style={styles.containerTitle}>
        <Text style={styles.title1}>Leads</Text>
        <View style={styles.press}>
          <Icon
            name="search"
            size={20}
            color="#000"
            style={styles.iconSearch}
          />
          <Icon
            name="align-center"
            size={20}
            color="#000"
            style={styles.iconAligh}
          />
        </View>
      </View>
      <View style={styles.container}>
        <Icon name="user" size={32} color="#3B6792" />
        <Icon name="layers" size={32} color="#C8DFF6" />
      </View>
      <View style={styles.containerLine}>
        <View style={styles.line} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  title1: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
  },
  containerLine: {
    width: '50%',
    marginTop: 4,
  },
  line: {
    borderWidth: 1,
    borderColor: '#3B6792',
  },
  press: {
    flexDirection: 'row',
  },
  iconSearch: {
    marginRight: 24,
  },
  iconAligh: {
    marginRight: 4,
  },
});

export default Header;
