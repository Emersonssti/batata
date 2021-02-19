import React from "react";
import Menu from "../../components/Menu/Internal";
import Footer from "../../components/Footer/Internal";
import PropTypes from "prop-types";

const LayoutInternal = (props) => {
  return (
    <>
      <Menu />
      {props.children}
      <Footer />
    </>
  );
};

LayoutInternal.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default LayoutInternal;
