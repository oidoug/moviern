import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import api from '../services/api';

export default function MovieItem(props) {

  return(
    <View style={styles.container}>
      <Image
        style={styles.cover}
        source={{uri: api.imgURL + props.movie.item.poster_path}}
      />
      <Text style={styles.title}>{props.movie.item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    flexBasis: 0,
  },
  cover: {
    width: 105,
    height: 140,
    borderRadius: 8,
  },
  title: {
    flex: 1,
    textAlign: "left",
    paddingTop: 15,
    paddingBottom: 5,
    color: "#B7BFC3",
    fontSize: 15,
    fontWeight: "normal",
  },
});