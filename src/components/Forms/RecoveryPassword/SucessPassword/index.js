import React from "react";

const FormSucessPassword = () => {
  return (
    <>
      <header>
        <img src="assets/images/batatafrita.png" alt="Batata Logo" />
        <h1 className="sucess">
          <strong>Senha alterada com sucesso!</strong>
        </h1>
      </header>
      <div className="_infos">
        <p>Utilize sua nova senha para fazer o seu login</p>
      </div>
    </>
  );
};

export default FormSucessPassword;
