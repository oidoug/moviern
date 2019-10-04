import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import MovieCarouselItem from './MovieCarouselItem';
import styles, {sliderWidth, itemWidth, scrollInterpolators, animatedStyles} from '../styles/Carousel.style';

export const ENTRIES = [
  {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg'
  },
  {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
  },
  {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg'
  },
  {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
  },
  {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
  },
  {
      title: 'Middle Earth, Germany',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/lceHsT6l.jpg'
  }
];

export default function MovieCarousel(props) {
  return(
    <View style={styles.container}>
      <Carousel
        data={ENTRIES}
        renderItem={(item, index)=>{<MovieCarouselItem item={item}/>}}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        enableMomentum={true}
        loop={true}
        activeSlideAlignment={'start'}
        useScrollView={true}
        scrollInterpolator={scrollInterpolators}
        slideInterpolatedStyle={animatedStyles}
      />
    </View>
  );
}
