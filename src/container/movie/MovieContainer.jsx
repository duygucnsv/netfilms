import React from "react";
import FeaturedMovie from "../../components/featured-movie/FeaturedMovie";

function MovieContainer({ movie }) {
  return <FeaturedMovie movie={movie} isCompact={false} />;
}

export default MovieContainer;
