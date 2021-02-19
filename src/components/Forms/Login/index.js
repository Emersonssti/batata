import React from "react";
import PropTypes from "prop-types";
// import PasswordMask from "react-password-mask";

const FormLogin = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="frm-login">
      <label htmlFor="email">Digite seu e-mail</label>

      <input
        name="email"
        value={props.email}
        type="email"
        onChange={props.onChange}
        id="email"
        placeholder="Seu e-mail"
        autoComplete="off"
        required
      />
      <label htmlFor="pass">Digite sua senha</label>
      <input
        name="password"
        id="password"
        placeholder="Sua senha"
        value={props.password}
        onChange={props.onChange}
        // showButtonContent={"Exibir"}
        // hideButtonContent={"Ocultar"}
        required
      />
      <input type="submit" defaultValue="Entrar" />
    </form>
  );
};

FormLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormLogin;
