import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button style={props.estilo} onClick={props.acao} type={props.tipo}>
      {props.nome}
    </button>
  );
};

Button.propTypes = {
  estilo: PropTypes.object.isRequired,
  acao: PropTypes.func.isRequired,
  tipo: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};

export default Button;
