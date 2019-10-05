import React from 'react';
import { 
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { baseBackdropURL } from '../services/api';
import MovieCard from '../components/MovieCard';

const { height: viewportHeight } = Dimensions.get('window');
const coverHeight = 0.6 * viewportHeight;

export default function MovieScreen(props) {

  const movie = props.navigation.getParam('movie');
  const backdropURL = baseBackdropURL + movie.backdrop_path;
  console.log(backdropURL);
  return (
    <View style={styles.container}>

      <ScrollView style={styles.container}>
        <Image 
          style={styles.cover}
          source={{uri: backdropURL}}
        />
        <MovieCard movie={movie}/>
      </ScrollView>

      {/* BackButton */}
      <TouchableOpacity
          activeOpacity={0.7}
          style={styles.backButton}
          onPress={() => { 
            props.navigation.goBack();
          }}
        >
          <Image 
            style={styles.backButtonArrow}
            source={require('../assets/arrow_left.png')}
          />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
  },
  cover: { 
    height: coverHeight,
    width: '100%',
    resizeMode: "cover",
    backgroundColor: "black",
  },

  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 42,
    height: 42,
    backgroundColor: 'black',
    borderRadius: 21,
  },
  backButtonArrow: {
    marginTop: 11.5,
    marginLeft: 12.5,
  },
});