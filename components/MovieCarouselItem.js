import React from 'react';
import { Image } from 'react-native';

import styles from '../styles/Carousel.style';

export default function MovieCarouselItem(props) {

  return (
    <Image
      source={{ uri: props.illustration }}
      style={styles.image}
    />
  );
}