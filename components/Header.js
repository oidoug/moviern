import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import api from '../services/api';

import MovieCarousel from './MovieCarousel';

export default function Header(props) {

  // Itens of the carousel.
  const [results, setResults] = useState([]);

  // Page control.
  const [result_page, setResultPage] = useState(1);

  // On function creation, run the request to get the grid list.
  useEffect(()=>{
    requestMovieList();
  },[]);

  function requestMovieList() {
    api.get('/movie/upcoming', {
      params: {
        page: result_page,
      }
    })
    .then(function (response) {
      setResults(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now Showing</Text>
      <Text style={styles.subTitle}>Richmond, Victoria</Text>

      <Text style={styles.sectionTitle}>Whats hot 🔥</Text>
      <MovieCarousel movieList={results}/>
      
      <Text style={styles.sectionTitle}>Upcoming 📽</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 26,
  },
  title: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
  subTitle: {
    color: "#DBE0E5",
    opacity: 0.5,
    fontSize: 17,
    fontWeight: "normal",
  },
  sectionTitle: {
    paddingTop: 25,
    paddingBottom: 16,
    color: "#B7BFC3",
    fontSize: 17,
    fontWeight: "bold",
  }
});