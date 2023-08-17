import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import UserTemplate from "../templates/user-template";
import HomePage from './../pages/home-page';
import MoviePage from './../pages/movie';

const CustomRoutes = () => {
  const {id} = useParams();
  return (
    <BrowserRouter>
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
        </Route>
        <Route path="/">
          <Route
            index
            element={
              <UserTemplate>
                <MoviePage />
              </UserTemplate>
            }
          />
        </Route>
        <Route path=":id">
          <Route
            index
            element={
              <UserTemplate>
                <MoviePage />
              </UserTemplate>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
