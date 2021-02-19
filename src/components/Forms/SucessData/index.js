import React from "react";
import PropTypes from "prop-types";

const FormSuccessData = (props) => {
  return (
    <section>
      <header>
        <img src="assets/images/batatafrita.png" alt="Batata Logo" />
        <h1>
          <strong>Cadastro Concluído!</strong>
        </h1>
      </header>
      {!props.displaySuccessMergeAccount && (
        <>
          <div className="_infos">
            <p>
              Enviamos um e-mail de confirmação para:{" "}
              <strong>{props.email}</strong>
            </p>
            <p>
              Acesse seu e-mail e clique no link de confirmação para confirmar a
              sua conta!
            </p>
            <p>Caso não tenha recebido o e-mail, clique abaixo para reenviar</p>
          </div>
          <a href="/#" className="bt-register" onClick={props.onClick}>
            Reenviar E-mail de confirmação
          </a>
        </>
      )}
    </section>
  );
};

FormSuccessData.propTypes = {
  displaySuccessMergeAccount: PropTypes.bool,
  email: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormSuccessData;
