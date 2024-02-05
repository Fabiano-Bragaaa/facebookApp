import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image style={styles.picture} source={require('../img/facebook.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.picture} source={require('../img/message.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderWidth: 2,
    borderBottomColor: '#000',
    shadowColor: '#000',
    elevation: 2,
    height: 55,
  },
  picture: {
    height: 40,
    width: 40,
  },
});
