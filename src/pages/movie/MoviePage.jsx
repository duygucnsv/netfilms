import React, { useEffect, useState } from "react";
import MovieContainer from "../../container/movie/MovieContainer";
import { getMovie } from "../../api/movie";
import { useParams } from "react-router-dom";

function MoviePage() {
  const [movieDetail, setMovieDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const movie = await getMovie(id);
        setMovieDetail(movie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetail();
  }, []);

  if (!movieDetail) {
    return <h3>not found</h3>;
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
