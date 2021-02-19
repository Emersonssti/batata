import React from "react";
import PropTypes from "prop-types";

const FormSendEmail = (props) => {
  return (
    <>
      <header>
        <img src="assets/images/batatafrita.png" alt="Batata Logo" />
        <h1>Digite seu e-mail de cadastro</h1>
      </header>
      <form onSubmit={props.onSubmit} className="frm-login">
        <label htmlFor="email">Seu e-mail</label>
        <input
          name="email"
          value={props.email}
          onChange={props.onChange}
          type="email"
          id="email"
          placeholder="Digite seu e-mail de cadastro"
          autoComplete="off"
          required
        />
        <span className="msg-error hidden">
          <p>Esse número está associadoà conta: de*****froi@fs.com.br</p>
          <p>
            Se este for o seu e-mail, <a href="/#">faça login</a> utilizando
            ele. Se você não tiver acesso a este e-mail{" "}
            <a href="/#">entre em contato com o suporte técnico</a>
          </p>
        </span>
        <input type="submit" defaultValue="Recuperar senha" />
      </form>
    </>
  );
};

FormSendEmail.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormSendEmail;
