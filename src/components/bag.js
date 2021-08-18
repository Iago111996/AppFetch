import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';

export const Bag = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.push('Checkout')}>
      <View style={styles.containerBag}>
        <Image
          source={require('../assets/images/icone-sacola.png')}
          style={styles.imagem}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerBag: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 30,
  },
  imagem: {
    height: 30,
    width: 30,
  },
});
