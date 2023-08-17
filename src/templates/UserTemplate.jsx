import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Spacer from "../components/spacer/Spacer";

const UserTemplate = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Spacer />
      <Footer />
    </>
  );
};

export default UserTemplate;
