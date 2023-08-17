import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import UserTemplate from "../templates/UserTemplate";
import HomePage from "../pages/home/HomePage";
import ScrollToTop from "../components/scroll-to-top/ScrollToTop";
import MoviePage from "../pages/movie/MoviePage";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <UserTemplate>
                <HomePage />
              </UserTemplate>
            }
          />
          <Route path="category">
            <Route
              index
              element={
                <UserTemplate>
                  <HomePage />
                </UserTemplate>
              }
            />
            <Route
              path=":id"
              element={
                <UserTemplate>
                  <HomePage />
                </UserTemplate>
              }
            />
          </Route>

          <Route path="movie">
            <Route
              index
              element={
                <UserTemplate>
                  <MoviePage />
                </UserTemplate>
              }
            />
            <Route
              path=":id"
              element={
                <UserTemplate>
                  <MoviePage />
                </UserTemplate>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
