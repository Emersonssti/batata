import React from "react";
import PropTypes from "prop-types";

const CardTemplate = (props) => {
  return (
    <div className={`_card ${props.status ? props.status : ""}`}>
      {props.children}
    </div>
  );
};

CardTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.string,
};

export default CardTemplate;
