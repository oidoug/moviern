import React from 'react';
import { 
  TouchableOpacity, 
  View, 
  Image,
} from 'react-native';

import api from '../services/api';
import styles from '../styles/Carousel.style';


export default function MovieCarouselItem(props) {

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.slideInnerContainer}
      onPress={() => { alert(`You've clicked '${props.item.title}'`); }}
    >
      <View style={styles.shadow} />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: api.imgURL + props.item.poster_path }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
}