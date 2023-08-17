import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      Made with ❤️ by&nbsp;
      <Link href="https://www.linkedin.com/in/duygucansev/" target="_blank">
        Duygu Cansev
      </Link>
    </footer>
  );
};

export default Footer;
