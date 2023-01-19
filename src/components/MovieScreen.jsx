import React from "react";
import MovieCard from "./MovieCard";

function MovieScreen({
  list,
  page,
  setPage,
  movieList,
  addMovieHandler,
  removieMovie,
}) {
  const increment = () => {
    setPage(page + 1);
  };
  const decrement = () => {
    setPage(page - 1);
  };

  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        key={index}
        movie={movie}
        addMovie={addMovieHandler}
        removeMovie={removieMovie}
        list={list}
      />
    );
  });

  return (
    <div className="page">
      <h1>Chris's Movie Theatre</h1>
      <div className="btn-container">
        <h3>Add movie to watchlist</h3>
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default MovieScreen;
