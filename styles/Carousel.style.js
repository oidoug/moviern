import { StyleSheet, Dimensions, Platform } from 'react-native';
import { getInputRangeFromIndexes } from 'react-native-snap-carousel';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

// Grid item has 28% width, according to design spec
// and cover item has 46% width.
const slideWidth = wp(46);
const slideHeight = slideWidth * 1.35;

// 1% is close to 5px in iPhones
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 16;

export default StyleSheet.create({
  // Carousel styles
  container: {
    paddingVertical: 0
  },
  slider: {
    marginTop: 0,
    paddingLeft: 0,
    overflow: 'visible' // for custom animations
  },

  // Item styles
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 0 // needed for shadow
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    shadowColor: "#028AB2",
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 15 },
    shadowRadius: 10,
    borderRadius: entryBorderRadius,
    backgroundColor: 'black',
    elevation: 2
  },
  imageContainer: {
    flex: 1,
    // Prevent a random Android rendering issue :: taken out from snapcarousel example.
    marginBottom: IS_IOS ? 0 : -1,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: entryBorderRadius,
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'white'
  },
});

// This configuration was taken off and modifyed from example 6 in Snap Carousel's examples.
export function animatedStyles (index, animatedValue, carouselProps) {
  return {
    zIndex: carouselProps.data.length - index,
    transform: [{
      rotate: animatedValue.interpolate({
        inputRange: [-1, 1, 2],
        outputRange: ['-5deg', '0deg', '-5deg'],
        extrapolate: 'clamp'
      })
    }, {
      scale: animatedValue.interpolate({
        inputRange: [-1, 1, 1],
        outputRange: [0.85, 1, 0.85]
      })
    }]
  };
}