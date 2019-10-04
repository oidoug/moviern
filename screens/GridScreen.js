import React, { useState, useEffect } from 'react';
import { ImageBackground, FlatList, StyleSheet } from 'react-native';

import api from '../services/api';

import Header from '../components/Header';
import MovieGridItem from '../components/MovieGridItem';

export default function GridScreen(props) {

  // Itens of the grid.
  const [results, setResults] = useState([]);

  // Page control.
  const [result_page, setResultPage] = useState(1);

  // On function creation, run the request to get the grid list.
  useEffect(()=>{
    requestMovieList();
  },[]);

  // Upcoming movies: sorting by popularity otherwise too many unknown movies shows up.
  function requestMovieList() {
    api.get('/discover/movie', {
      params: {
        sort_by: "popularity.desc",
        "primary_release_date.gte": "2019-10-04",
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
    <ImageBackground 
      style={styles.container}
      source={require("../assets/Background.png")}
    >
      <FlatList
        style={styles.grid}
        contentContainerStyle={styles.content}
        numColumns={3}
        data={results}
        renderItem={({item}) => 
          <MovieGridItem key={item.id} movie={item} />
        }
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Header />}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "black",
    resizeMode: "cover",
  },
  grid: {
    paddingHorizontal: 0,
  },
  content: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
  }
});