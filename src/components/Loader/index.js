import React from "react";
import Loading from 'react-fullscreen-loading';
import PropTypes from "prop-types";

const Loader = (props) => {
  return (
    <Loading
      loading={props.display}
      background="rgba(0, 0, 0, 0.6)"
      loaderColor="red"
    />  
  );
};

Loader.propTypes = {
  display: PropTypes.bool.isRequired,
  background: PropTypes.string,
  loaderColor: PropTypes.string,
};

export default Loader;
