import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import MovieCarouselItem from './MovieCarouselItem';
import styles, {sliderWidth, itemWidth, animatedStyles} from '../styles/Carousel.style';

console.log(sliderWidth, itemWidth);

export default function MovieCarousel(props) {
  
  return(
    <View style={styles.container}>
      <Carousel
        data={props.movieList}
        renderItem={({item}, index)=>{
          return(<MovieCarouselItem item={item}/>);
        }}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
        enableMomentum={true}
        activeSlideAlignment={'start'}
      />
    </View>
  );
}
