import React, { useState, useEffect } from 'react';
import { ImageBackground, FlatList, StyleSheet } from 'react-native';

import api from '../services/api';

import HotCarousel from '../components/HotCarousel';
import MovieItem from '../components/MovieItem';

export default function GridScreen(props) {

  // Itens of the grid.
  const [results, setResults] = useState([]);

  // Page control.
  const [result_page, setResultPage] = useState(1);

  // On function creation, run the request to get the grid list.
  useEffect(()=>{
    requestMovieList();
  },[]);

  function requestMovieList() {
    api.get('/discover/movie', {
      params: {
        sort_by: "popularity.desc",
        page: result_page,
      }
    })
    .then(function (response) {
      console.log(response.data);
      setResults(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <ImageBackground 
      style={styles.container}
      source={require("../assets/Background.png")}
    >
      <FlatList
        style={styles.grid}
        contentContainerStyle={styles.content}
        numColumns={3}
        data={results}
        renderItem={(item) => <MovieItem key={item.id} movie={item} />}
        keyExtractor={(item) => {item.id}}
        ListHeaderComponent={<HotCarousel />}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { 
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    resizeMode: "cover",
  },
  grid: {
    paddingHorizontal: 20,
  },
  content: {
    justifyContent: "space-between",
  }
});