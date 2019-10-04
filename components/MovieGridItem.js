import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet,
  Dimensions,
} from 'react-native';

import api from '../services/api';

const { width: viewportWidth } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
// Grid item has 28% width, according to design spec
// and cover item has 46% width.
// 1.35 is the approximate proportion for poster images.
const coverWidth = wp(28);
const coverHeight = coverWidth * 1.35;

export default function MovieGridItem(props) {

  return(
    <View style={styles.container}>
      <Image
        style={styles.cover}
        source={{uri: api.imgURL + props.movie.poster_path}}
      />
      <Text style={styles.title}>{props.movie.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    flexBasis: 0,
    paddingBottom: 15,
  },
  cover: {
    width: coverWidth,
    height: coverHeight,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  title: {
    flexGrow: 1,
    width: coverWidth,
    textAlign: "left",
    paddingTop: 15,
    paddingBottom: 5,
    color: "#B7BFC3",
    fontSize: 15,
    fontWeight: "normal",
  },
});