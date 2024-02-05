import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function List(props) {
  return (
    <View>
      <View style={styles.userView}>
        <Image style={styles.userImg} source={{uri: props.data.imgperfil}} />
        <Text style={styles.userText}> {props.data.nome} </Text>
      </View>
      <Image style={styles.imgFeed} source={{uri: props.data.imgPublicacao}} />
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btnClick}>
          <Image style={styles.btn} source={require('../img/like.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnClick}>
          <Image style={styles.btn} source={require('../img/comment.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.description}> {props.data.descricao} </Text>
        <Text style={styles.description}> {props.data.descricao} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userView: {
    flexDirection: 'row',
    flex: 1,
    padding: 8,
    alignItems: 'center',
  },
  userImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userText: {
    fontSize: 20,
    color: '#000',
    padding: 8,
  },
  feedView: {
    flex: 1,
  },
  imgFeed: {
    height: 400,
    alignItems: 'center',
  },
  btnArea: {
    flexDirection: 'row',
    flex: 1,
    padding: 8,
    alignItems: 'center',
  },
  btn: {
    height: 40,
    width: 40,
  },
  btnClick: {
    paddingLeft: 8,
  },
  description: {
    fontSize: 20,
    color: '#000',
    padding: 8,
  },
  descriptionView: {
    flex: 1,
  },
});
