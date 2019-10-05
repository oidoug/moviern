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

const { height: viewportHeight } = Dimensions.get('window');
const coverHeight = 0.7 * viewportHeight;

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
        <View style={styles.card}>
          <View styles={styles.cardRidge}>
            <View style={styles.ridgeNodge} />
          </View>
          <Text style={styles.title}>{movie.title}</Text>
          {/* stars */}
          {/* hours */}
          {/* buttons */}

          {/* tip */}
          <Text style={styles.tipText}>{movie.title}</Text>
          {/* description */}
          <Text style={styles.detailText}>{movie.overview}</Text>
        </View>
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
  card: {
    top: -16,
    backgroundColor: "black",
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(1,1,1,0.15)',
    paddingHorizontal: 20,
  },
  cardRidge: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ridgeNodge: {
    marginVertical: 10,
    width: 48,
    height: 4,
    borderRadius: 3,
    backgroundColor: 'white',
    opacity: 0.1,
  },
  title: {
    marginVertical: 10,
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "normal",
  },
  tipText: {
    marginVertical: 10,
    color: "#DBE0E5",
    fontSize: 12,
    fontWeight: "normal",
  },
  detailText: {
    marginTop: 10,
    marginBottom: 50,
    color: "#fff",
    fontSize: 17,
    fontWeight: "normal",
    lineHeight: 28,
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