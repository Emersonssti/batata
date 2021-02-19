import React from "react";
import PropTypes from "prop-types";

const Modal = (props) => {
  return (
    <div className="modal">
      <section className="content">{props.children}</section>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
