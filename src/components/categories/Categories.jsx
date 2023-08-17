import React from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <Link
          key={category.id}
          className="category"
          to={`/category/${category.id}`}
        >
          <div>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
