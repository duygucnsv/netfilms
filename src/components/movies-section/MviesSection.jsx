import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function MoviesSection({ title, movies }) {
  return (
    <div className="moviesSection">
      <h3 className="title">{title}</h3>
      <div className="movies">
        {movies.map((movie) => (
          <div className="movie" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                alt={movie.title}
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="img"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesSection;
