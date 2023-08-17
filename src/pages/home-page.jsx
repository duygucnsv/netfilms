import React, { useEffect, useState } from "react";
import {
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
  getSingleCategory,
} from "./../api/movie";
import HomeContainer from "../container/home/HomeContainer";

import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components/users/loading/Loading";
function HomePage() {
  const [loading, setLoading] = useState(true);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const handleCategoryChange = async (categoryId) => {
    try {
      if (categoryId) {
        const { results } = await getSingleCategory(categoryId);
        setSelectedCategory(results);
      } else {
        setSelectedCategory([]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { results: topRatedMovies },
          { results: popularMovies },
          { genres: categories },
        ] = await Promise.all([
          getTopRatedMovies(),
          getPopularMovies(),
          getCategories(),
        ]);
        setTopRatedMovies(topRatedMovies);
        setPopularMovies(popularMovies);
        setCategories(categories);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    handleCategoryChange(id);
  }, [id]);
  const handleSelectChange = (event) => {
    const categoryId = event.target.value;
    console.log(categoryId);
    handleCategoryChange(categoryId);
    navigate(`/category/${categoryId}`);
  };
  if (loading) {
    return <Loading/>
  }
  return (
    <div>
      <HomeContainer
        topRatedMovies={topRatedMovies}
        popularMovies={popularMovies}
        categories={categories}
        selectedCategory={{
          id: id ?? "",
          movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
        }}
        handleSelectChange={handleSelectChange}
      />
    </div>
  );
}
export default HomePage;
