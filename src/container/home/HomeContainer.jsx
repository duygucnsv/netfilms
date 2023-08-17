import React from "react";
import FeaturedMovie from "../../components/featured-movie/FeaturedMovie";
import Categories from "../../components/categories/Categories";
import MoviesSection from "../../components/movies-section/MoviesSection";
import Spacer from "../../components/spacer/Spacer";

function HomeContainer({
  topRatedMovies = [],
  popularMovies = [],
  categories = [],
  selectedCategory,
  handleSelectChange,
}) {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <select onChange={handleSelectChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <Spacer />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory?.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}

      <MoviesSection
        title="Popular films"
        movies={topRatedMovies.slice(1, 7)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={popularMovies.slice(7, 13)}
      />
    </div>
  );
}

export default HomeContainer;
