import React from "react";
import PropTypes from "prop-types";

const FormSuccessEmail = (props) => {
  return (
    <>
      <header>
        <img src="assets/images/batatafrita.png" alt="Batata Logo" />
        <h1 className="sucess">
          <strong>Mensagem Enviada com Sucesso!</strong>
        </h1>
      </header>
      <div className="_infos">
        <p>
          Enviamos uma mensagem de redefinição de senha para o e-mail:{" "}
          <strong>{props.email}</strong>
        </p>
        <p>A mensagem contém todas as informações para a redefinição</p>
      </div>
    </>
  );
};

FormSuccessEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default FormSuccessEmail;
