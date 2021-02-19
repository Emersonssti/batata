import React from "react";
import NumberFormat from "react-number-format";
// import PasswordMask from "react-password-mask";
import PropTypes from "prop-types";


const FormRegisterData = (props) => {
  return (
    <section>
      <header>
        <img src="assets/images/batatafrita.png" alt="Batata Logo" />
        <h1>Para finalizar seu cadastro, digite os dados abaixo</h1>
      </header>
      <form className="frm-login" onSubmit={props.onSubmit}>
        <label htmlFor="cnpj">CPF</label>
        <NumberFormat
          type="text"
          name="cpf"
          id="cpf"
          value={props.cpf}
          onChange={props.onChange}         
          placeholder="CPF"
          required
        />
        <label htmlFor="email">
          Digite seu e-mail (será o seu login de acesso)
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={props.email}
          onChange={props.onChange}
          placeholder="Seu e-mail"
          autoComplete="off"
          required
        />
        <label htmlFor="pass">Escolha uma senha</label>
        <input
          name="password"
          type="password"
          id="pass"
          placeholder="Sua senha"
          value={props.password}
          onChange={props.onChange}
          showButtonContent={"Exibir"}
          hideButtonContent={"Ocultar"}
          required
        />
        <label htmlFor="pass2">Digite a senha novamente</label>
        <input
          name="confirmPassword"
          type="password"
          id="confirmPassword"
          placeholder="Digite a senha novamente"
          value={props.confirmPassword}
          onChange={props.onChange}
          showButtonContent={"Exibir"}
          hideButtonContent={"Ocultar"}
          required
        />
        <input type="submit" defaultValue="Finalizar Cadastro" />
      </form>
    </section>
  );
};

FormRegisterData.propTypes = {
  cpf: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormRegisterData;
