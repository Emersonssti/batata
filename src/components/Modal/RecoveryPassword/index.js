import React, { Component } from "react";
import queryString from "query-string";

import {
  ModalTemplate,
  FormSendEmail,
  FormSuccessEmail,
  FormSendPassword,
  FormSuccessPassword,
  Loader,
  AlertsErrors,
} from "../../../components";

import {
  validatorEmail,
  validatorPassword,
  validatorIdenticalPassword,
} from "../../../utils";

import { sendForgotPassword, sendChangePassword } from "../../../services";

export default class ModalRecoveryPassword extends Component {
  /**
   * Constructor
   * @param {obj} props
   */
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      displayFormSendEmail: false,
      displayFormSuccessEmail: false,
      displayFormSendPassword: false,
      displayFormSuccessPassword: false,
      loader: false,
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
      resetPassword: "",
      flowRecoveryPassword: false,
    };

    this.baseState = this.state;
  }

  /**
   * Component Did Mount
   */
  componentDidMount() {
    this.getHashValidator();
    this.getProps();
  }

  /**
   * Function Get Props
   */
  getProps() {
    if (this.props.flowRecoveryPassword) {
      this.setState({
        flowRecoveryPassword: true,
      });
      return;
    }
  }

  /**
   * Function Get Hash Validator
   */
  async getHashValidator() {
    const url = queryString.parse(window.location.search);
    if (url.resetPassword) {
      this.setState({
        displayModal: true,
        displayFormSendPassword: true,
        resetPassword: url.resetPassword,
      });
    }
  }

  /**
   * Function On Click Button Modal
   */
  onClickButtonModal(event, status) {
    event.preventDefault();

    const { flowRecoveryPassword } = this.state;

    if (!status) {
      this.setState({
        displayModal: false,
        displayFormSendEmail: false,
        displayFormSuccessEmail: false,
        displayFormSendPassword: false,
        displayFormSuccessPassword: false,
        loader: false,
        email: "",
        password: "",
        confirmPassword: "",
        errorMessage: "",
        hash: "",
      });
      return;
    }

    if (flowRecoveryPassword) {
      this.setState({
        displayModal: true,
        displayFormSendPassword: true,
      });
      return;
    }

    this.setState({
      displayModal: true,
      displayFormSendEmail: true,
    });
  }

  /**
   * Function Handle Change Form Send Email
   * @param {obj} event
   */
  handleChangeFormSendEmail(event) {
    this.setState({ email: event.target.value, errorMessage: "" });
  }

  /**
   * Function Handle Submit Form Send Email
   * @param {obj} event
   */
  async handleSubmitFormSendEmail(event) {
    event.preventDefault();

    const { email } = this.state;

    const validator = validatorEmail(email);

    if (!validator.status) {
      this.setState({ errorMessage: validator.message });
      return;
    }

    this.setState({ loader: true });

    const sendFormEmail = await sendForgotPassword(validator.email);

    if (!sendFormEmail.status) {
      this.setState({ errorMessage: sendFormEmail.message, loader: false });
      return;
    }

    this.setState({
      loader: false,
      displayFormSendEmail: false,
      displayFormSuccessEmail: true,
    });
  }

  /**
   * Function Handle Change Form Send Password
   * @param {obj} event
   */
  handleChangeFormSendPassword(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorMessage: "",
    });
  }

  /**
   * Function Handle Submit Form Send Password
   * @param {obj} event
   */
  async handleSubmitFormSendPassword(event) {
    event.preventDefault();

    const { password, confirmPassword, resetPassword } = this.state;

    const validatorIdenticalPass = validatorIdenticalPassword(
      password,
      confirmPassword
    );

    if (!validatorIdenticalPass.status) {
      this.setState({ errorMessage: validatorIdenticalPass.message });
      return;
    }

    const validatePassword = validatorPassword(password);

    if (!validatePassword.status) {
      this.setState({ errorMessage: validatePassword.message });
      return;
    }

    this.setState({ loader: true });

    const sendPassConfirmPass = await sendChangePassword(
      resetPassword,
      validatePassword.password
    );

    if (!sendPassConfirmPass.status) {
      this.setState({
        errorMessage: sendPassConfirmPass.message,
        loader: false,
      });
      return;
    }

    this.setState({
      displayFormSendPassword: false,
      displayFormSuccessPassword: true,
      loader: false,
    });
  }

  /**
   * Render Component
   */
  render() {
    return (
      <>
        {this.state.flowRecoveryPassword ? (
          <a
            href="/#"
            onClick={(event) => this.onClickButtonModal(event, true)}
            className="bt-plan"
          >
            Trocar minha senha
          </a>
        ) : (
          <a
            onClick={(event) => this.onClickButtonModal(event, true)}
            href="/#"
            className="recover-pass"
          >
            Esqueci minha senha
          </a>
        )}

        {this.state.displayModal !== false && (
          <ModalTemplate>
            <Loader display={this.state.loader} />

            {this.state.displayFormSendEmail !== false && (
              <FormSendEmail
                email={this.state.email}
                displayFormSendEmail={this.state.displayFormSendEmail}
                onChange={(event) => this.handleChangeFormSendEmail(event)}
                onSubmit={(event) => this.handleSubmitFormSendEmail(event)}
              />
            )}

            {this.state.displayFormSuccessEmail !== false && (
              <FormSuccessEmail email={this.state.email} />
            )}

            {this.state.displayFormSendPassword !== false && (
              <FormSendPassword
                password={this.state.password}
                confirmPassword={this.state.confirmPassword}
                onChange={(event) => this.handleChangeFormSendPassword(event)}
                onSubmit={(event) => this.handleSubmitFormSendPassword(event)}
              />
            )}

            {this.state.displayFormSuccessPassword !== false && (
              <FormSuccessPassword />
            )}

            {this.state.errorMessage !== "" && (
              <AlertsErrors message={this.state.errorMessage} />
            )}

            <a
              href="/#"
              className="bt-register"
              onClick={(event) => this.onClickButtonModal(event, false)}
            >
              Voltar
            </a>
          </ModalTemplate>
        )}
      </>
    );
  }
}
