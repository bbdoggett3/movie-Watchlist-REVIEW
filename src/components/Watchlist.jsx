import React from "react";
import MovieCard from "./MovieCard";

function Watchlist({ list, removeMovie }) {
  const movieDisplay = list.map((movie, index) => {
    return (
      <MovieCard
        key={index}
        movie={movie}
        removeMovie={removeMovie}
        list={list}
      ></MovieCard>
    );
  });
  return (
    <div className="Watchlist">
      <h1>MY Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default Watchlist;
