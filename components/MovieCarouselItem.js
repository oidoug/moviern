import React from 'react';
import { 
  TouchableOpacity, 
  View, 
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import { baseImgURL } from '../services/api';
import styles from '../styles/Carousel.style';
import { withNavigation } from 'react-navigation';


function MovieCarouselItem(props) {

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.slideInnerContainer}
      onPress={() => { 
        props.navigation.navigate('MovieScreen', {movie: props.movie});
      }}
    >
      <View style={styles.shadow} />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: baseImgURL + props.movie.poster_path }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
}

MovieCarouselItem.propTypes = {
  movie: PropTypes.object
}

export default withNavigation(MovieCarouselItem);