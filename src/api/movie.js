import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.API_KEY;

const fetchMovieApi = async (pathname, query = "") => {
  try {
    const response = await axios.get(`${API_URL}${pathname}`, {
      params: {
        api_key: API_KEY,
        ...query,
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjhjYzgwYjczNTcwYmNjMzZjNDQ1ODY3YTM2ZjNhMyIsInN1YiI6IjY0Mzg0NWEyYzI2Nzk2MDA5ODFiZDYzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QWYAlcRSx1tydT6wXizCt8csChCTB4mCgc-J05_KojM",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleCategory = async (genreId) => {
  return fetchMovieApi("/discover/movie", { with_genres: genreId });
};

const getCategories = async () => {
  return fetchMovieApi("/genre/movie/list", { page: 1 });
};

const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular", { page: 1 });
};

const getTopRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated", { page: 1 });
};

const getMovie = async (movieId) => {
  return fetchMovieApi(`/movie/${movieId}`);
};

export {
  fetchMovieApi,
  getSingleCategory,
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
  getMovie,
};
