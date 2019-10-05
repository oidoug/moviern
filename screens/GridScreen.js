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
  const [loading, setLoading] = useState(false);

  // On result_page creation, run the request to get the grid list.
  useEffect(()=>{
    requestMovieList();
  }, [result_page]);

  // Upcoming movies: sorting by popularity otherwise too many unknown movies shows up.
  function requestMovieList() {
    setLoading(true);
    api.get('/discover/movie', {
      params: {
        sort_by: "popularity.desc",
        "primary_release_date.gte": "2019-10-04",
        page: result_page,
      }
    })
    .then(function (response) {
      setLoading(false);
      if (result_page === 1) {
        setResults(response.data.results);
      } else {
        console.log(`${loading} = ${results.length}:${response.data.results.length}`);
        setResults([...results, response.data.results]);
      }
    })
    .catch(function (error) {
      setLoading(false);
      console.log(error);
    });
  }

  function loadMore() {
    if (!loading) {
      setResultPage(result_page+1);
    }
  };

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
          <MovieGridItem 
            key={item.id}
            movie={item}
          />
        }
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={<Header />}
        onEndReached={loadMore}
        onEndReachedThreshold={1}
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