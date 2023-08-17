import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FaPlus } from "react-icons/fa";

const FeaturedMovie = ({ movie = {}, isCompact = true }) => {
  const { poster_path, title, overview } = movie;

  return (
    <div className="movieWrapper">
      <h1 className="movieTitle">{title}</h1>
      <p className={`overview ${isCompact ? "shortOverview" : ""}`}>
        {overview}
      </p>
      <div className="actionButtons">
        <Link className="playButton" to={`/movie/${movie.id}`}>
          Play
        </Link>
        <button className="addButton">
          <FaPlus />
        </button>
      </div>
      <div className="moviePoster">
        <div className="moviePosterOverlay">
          <img
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="img"
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
