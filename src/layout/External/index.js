import React from "react";
import Menu from "../../components/Menu/External";
import Footer from "../../components/Footer/External";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <>
      <Menu />
      {props.children}
      <Footer />
    </>
  );
};
