import React from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function MovieCard (props) {

  return(
    <View style={styles.card}>
      <View styles={styles.cardRidge}>
        <View style={styles.ridgeNodge} />
      </View>
      <Text style={styles.title}>{props.movie.title}</Text>
      {/* stars */}
      {/* hours */}
      {/* buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]}>
          <Text style={styles.buttonText}>
            Bookmark
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonRed]}>
          <Text style={styles.buttonText}>
            Buy Tickets
          </Text>
        </TouchableOpacity>
      </View>
      {/* tip */}
      <Text style={styles.tipText}>{props.movie.title}</Text>
      {/* description */}
      <Text style={styles.detailText}>{props.movie.overview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    top: -16,
    backgroundColor: "black",
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    borderWidth: 1,
    borderColor: '#2b2c2d',
    borderBottomWidth: 0,
    paddingHorizontal: 20,
  },
  cardRidge: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ridgeNodge: {
    marginVertical: 10,
    marginHorizontal: 10,
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

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  button: {
    borderRadius: 10,
    marginRight: 16,
  },
  buttonText: {
    marginVertical: 10,
    marginHorizontal: 25,
    color: "#fff",
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonBlue: {
    backgroundColor: "#009DFF",
  },
  buttonRed: {
    backgroundColor: "#FF0000",
  }
});