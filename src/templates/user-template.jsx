import React from "react";

import Header from "../components/users/common/header/Header";

import Footer from "../components/users/common/footer/Footer";
import Spacer from "../components/users/common/spacer/Spacer";


const UserTemplate = (props) => {
    const { children } = props;
  return (
    <>
        <Header />
        {children}
        <Spacer/>
        <Footer />
    </>
  );
};

export default UserTemplate;
