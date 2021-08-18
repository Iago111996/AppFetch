import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_LARGE,
  FONT_SIZE_X_SMALL,
  FONT_SIZE_MEDIUM,
  GREY,
} from '../../styles/styles';
import { Text, View, Image, StyleSheet } from 'react-native';

const CardLead = ({ name, fullName, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemPosition}>
        <View style={styles.item}>
          <View style={styles.itemHeader}>
            <View  style={styles.itemImage}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.texts}>
              <Text style={styles.textName}>{name} </Text>
              <View style={styles.section}>
                <View style={styles.icon}>
                  <Icon name="layers" size={16} color="#C0C0C0" />
                </View>
                <Text style={styles.textMid}>{fullName} </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemPosition: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    width: '100%',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    width: '100%',
    elevation: 2,
  },
  image: {
    borderRadius: 26,
    height: 52,
    width: 52,
  },
  itemImage: {
    marginTop: 3,
  },
  textName: {
    marginTop: 4,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    color: GREY,
  },
  textMid: {
    marginTop: 6,
    marginLeft: 8,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_X_SMALL,
    color: '#C0C0C0',
  },
  texts: {
    marginLeft: 20,
    marginBottom: 10,
  },
  containerText: {
    marginLeft: 16,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    marginTop: 8,
  }
});


export default CardLead;