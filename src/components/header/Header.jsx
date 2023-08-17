import { Link } from "react-router-dom";
import "./style.css";

import { FaPlayCircle } from "react-icons/fa";

import React from "react";

const Header = () => {
  return (
    <header className={`header container fluid`}>
      <div className="headerWrapper">
        <Link href="/" className="logo">
          <FaPlayCircle />
          NETFILMS
        </Link>
        <nav className="navigationMenu">
          <Link href="/">Movies</Link>
          <Link href="/">Series</Link>
          <Link href="/">Kids</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
