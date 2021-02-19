import React, { Component } from 'react';

import {
  FormLogin,
  Loader,
  AlertsErrors,
  ModalRecoveryPassword
} from "../../components";

import { validatorEmail } from "../../utils";

import { sendCheckPassword } from "../../services";


import './css/root.css';
import './css/style.css';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      loader: false
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorMessage: "",
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const { email, password } = this.state;

    const validator = validatorEmail(email);

    if (!validator.status) {
      this.setState({ errorMessage: validator.message });
      return;
    }

    this.setState({ loader: true });

    const sendCheckPasswordResponse = await sendCheckPassword(validator.email, password)

    if (!sendCheckPasswordResponse.status) {
      this.setState({
        errorMessage: sendCheckPasswordResponse,
        loader: false,
      });
      return;
    }

    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);

  }

  render() {
    return (
      <main className="pages-login">
        <Loader display={this.state.loader} />
        <div className="center-content">
          <section className="content">
            <header>
              <img src="assets/images/batatafrita.png" alt="Batata Logo" />
              <h1>Digite seu login e senha para continuar</h1>
            </header>
            <FormLogin
              email={this.state.email}
              password={this.state.password}
              onSubmit={(event) => this.handleSubmit(event)}
              onChange={(event) => this.handleChange(event)}
            />

            {this.state.errorMessage !== "" && (
              <AlertsErrors message={this.state.errorMessage} />
            )}
{/* 
            <ModalRecoveryPassword /> */}

            {/* <ModalRegisterData />  */}
          </section>
        </div>
      </main>

    )
  }


}

