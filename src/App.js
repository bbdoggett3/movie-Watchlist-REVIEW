import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);

  const addMovie = (movie) => setList([...list, movie]);

  const removeMovie = (movie) => {
    const newState = (list.filter = (m) => {
      return m !== movie;
    });

    setList(newState);
  };

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="app">
      <Header />
      <main>
        <MovieScreen
          list={list}
          page={page}
          setPage={setPage}
          movieList={movieList}
          addMovieHandler={addMovie}
          removeMovie={removeMovie}
        />
        <Watchlist list={list} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
