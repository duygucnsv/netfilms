import React from "react";
import MovieContainer from "../container/movie/MovieContainer";
import { getMovie } from "../api/movie";

async function MoviePage({ params, searchParams }) {
  const movieDetail = await getMovie(params.id);

  if (movieDetail.success === false) {
    <h3>not found</h3>;
  }

  if (searchParams.error === "true") {
    throw new Error("Something went wrong!");
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
