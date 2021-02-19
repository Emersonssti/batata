/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import queryString from "query-string";

import {
  ModalTemplate,  
  FormRegisterData,  
  Loader,
  AlertsErrors,
  FormSuccessData
} from "../../../components";

import {  
  validatorEmail,
  validatorPassword,
  validatorCPF,
  validatorIdenticalPassword,
} from "../../../utils";

import {
  sendMergeAccount,
  getMergeAccount,
} from "../../../services";

export default class ModalRegisterData extends Component {
  /**
   * Constructor
   * @param {obj} props
   */
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      displayFormSendPhone: false,
      displayFormValidatePincode: false,
      displayFormSuccessData: false,
      displayFormRegisterData: false,
      displaySuccessMergeAccount: false,
      loader: false,
      countResendPincode: 60,
      phone: "",
      email: "",
      password: "",
      cpf: "",
      confirmPassword: "",
      errorMessage: "",
      pinCode: "",
      idToken: "",
      transactionId: "",
    };

    this.baseState = this.state;
  }

  /**
   * Component Did Mount
   */
  componentDidMount() {
    const params = queryString.parse(window.location.search);
    if (params.confirmToken) {
      this.getMergeAccount(params.confirmToken);
    }
  }

  /**
   * Function Get Merge Account
   * @param {json} token
   */
  async getMergeAccount(token) {
    const getMergeAccountResponse = await getMergeAccount(token);

    if (!getMergeAccountResponse.status) {
      this.setState({
        displayModal: true,
        errorMessage: getMergeAccountResponse.message,
        loader: false,
      });
      return;
    }

    this.setState({
      displayModal: true,
      displayFormSuccessData: true,
      displaySuccessMergeAccount: true,
    });
  }

  /**
   * Function On Click Button Modal
   * @param {obj} event
   * @param {bool} status
   */
  onClickButtonModal(event, status) {
    event.preventDefault();

    if (!status) {
      this.setState(this.baseState);
      return;
    }

    this.setState({
      displayModal: true,
      displayFormRegisterData: true,
    });
  }

  /**
   * Function On Click Button Change Number
   * @param {obj} event
   */
//   onClickButtonChangeNumber(event) {
//     event.preventDefault();

//     this.setState({
//       displayFormSendPhone: true,
//       displayFormValidatePincode: false,
//     });
//   }

  /**
   * Function Handle Change Form Send Phone
   * @param {obj} event
   */
//   handleChangeFormSendPhone(event) {
//     this.setState({ phone: event.target.value, errorMessage: "" });
//   }

  /**
   * Function Handle Submit Form Send Phone
   * @param {obj} event
   */
//   async handleSubmitFormSendPhone(event) {
//     event.preventDefault();

//     const { phone } = this.state;

//     const validator = validatorPhoneNumber(phone);

//     if (!validator.status) {
//       this.setState({ errorMessage: validator.message });
//       return;
//     }

//     this.setState({ loader: true });

//     const sendFormPhone = await sendPincode(validator.phone);

//     if (!sendFormPhone.status) {
//       this.setState({ errorMessage: sendFormPhone.message, loader: false });
//       return;
//     }

//     this.showCountSendPincode();

//     this.setState({
//       loader: false,
//       displayFormSendPhone: false,
//       displayFormValidatePincode: true,
//       transactionId: sendFormPhone.transactionId,
//     });
//   }

  /**
   * Function Handle Change Form Validate Pincode
   * @param {obj} event
   */
//   handleChangeFormValidatePincode(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//       errorMessage: "",
//     });
//   }

  /**
   * Function Handle Submit Form Validate Pincode
   * @param {obj} event
   */
//   async handleSubmitFormValidatePincode(event) {
//     event.preventDefault();

//     const { pinCode, transactionId } = this.state;

//     const validator = validatorPincode(pinCode);

//     if (!validator.status) {
//       this.setState({ errorMessage: validator.message });
//       return;
//     }

//     this.setState({ loader: true });

//     const sendFormCode = await validatePincode(
//       validator.pincode,
//       transactionId
//     );

//     if (!sendFormCode.status) {
//       this.setState({ errorMessage: sendFormCode.message, loader: false });
//       return;
//     }

//     const sendAuthorize = await authorization(sendFormCode.fsAuthToken);

//     if (!sendAuthorize.status) {
//       this.setState({ errorMessage: sendAuthorize.message, loader: false });
//       return;
//     }

//     const sendVerifyCustomToken = await verifyCustomToken(
//       sendAuthorize.customToken
//     );

//     if (!sendVerifyCustomToken.status) {
//       this.setState({ errorMessage: sendAuthorize.message, loader: false });
//       return;
//     }

//     this.setState({
//       displayFormValidatePincode: false,
//       displayFormRegisterData: true,
//       loader: false,
//       idToken: sendVerifyCustomToken.idToken,
//     });
//   }

  /**
   * Function Handle Change Form Register Data
   * @param {obj} event
   */
  handleChangeFormRegisterData(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorMessage: "",
    });
  }

  /**
   * Functiom Handle Submit Form Register Data
   * @param {obj} event
   */
  async handleSubmitFormRegisterData(event) {
    event.preventDefault();

    const { email, cpf, password, confirmPassword, idToken } = this.state;

    const validatorCpf = validatorCPF(cpf);

    if (!validatorCpf.status) {
      this.setState({ errorMessage: validatorCpf.message });
      return;
    }

    const validatorMail = validatorEmail(email);

    if (!validatorMail.status) {
      this.setState({ errorMessage: validatorMail.message });
      return;
    }

    const validatorIdenticalPass = validatorIdenticalPassword(
      password,
      confirmPassword
    );

    if (!validatorIdenticalPass.status) {
      this.setState({ errorMessage: validatorIdenticalPass.message });
      return;
    }

    const validatorPass = validatorPassword(password);

    if (!validatorPass.status) {
      this.setState({ errorMessage: validatorPass.message });
      return;
    }

    this.setState({ loader: true });

    const sendFormRegisterData = await sendMergeAccount(
      idToken,
      validatorIdenticalPass.password,
      validatorCpf.cpf,
      validatorMail.email
    );

    if (!sendFormRegisterData.status) {
      this.setState({
        errorMessage: sendFormRegisterData.message,
        loader: false,
      });
      return;
    }

    this.setState({
      displayFormRegisterData: false,
      displayFormSuccessData: true,
      loader: false,
    });
  }

  /**
   * Function On Click Button Resend Email
   * @param {obj} event
   */
  onClickButtonResendEmail(event) {
    event.preventDefault();

    this.setState({
      displayFormRegisterData: true,
      displayFormSuccessData: false,
    });
  }

//   showCountSendPincode() {
//     const intervalId = setInterval(() => {
//       let count = this.state.countResendPincode - 1;
//       if (count >= 1) {
//         this.setState({
//           countResendPincode: count,
//         });
//       } else {
//         clearInterval(intervalId);
//         this.setState({
//           countResendPincode: 60,
//         });
//       }
//     }, 1000);
//   }

  /**
   * Render Component
   */
  render() {
    return (
      <React.Fragment>
        <a
          onClick={(event) => this.onClickButtonModal(event, true)}
          href="/#"
          className="bt-register"
        >
          Criar Cadastro
        </a>
        {this.state.displayModal !== false && (
          <ModalTemplate>
            <Loader display={this.state.loader} />

            {/* {this.state.displayFormSendPhone !== false && (
              <FormSendPhone
                displayFormSendPhone={this.state.displayFormSendPhone}
                phone={this.state.phone}
                onChange={(event) => this.handleChangeFormSendPhone(event)}
                onSubmit={(event) => this.handleSubmitFormSendPhone(event)}
              />
            )} */}

            {/* {this.state.displayFormValidatePincode !== false && (
              <FormValidatePincode
                phone={this.state.phone}
                countResendPincode={this.state.countResendPincode}
                pinCode={this.state.pinCode}
                onClickButtonChangeNumber={(event) =>
                  this.onClickButtonChangeNumber(event)
                }
                onChange={(event) =>
                  this.handleChangeFormValidatePincode(event)
                }
                onSubmit={(event) =>
                  this.handleSubmitFormValidatePincode(event)
                }
              />
            )} */}

            {this.state.displayFormRegisterData !== false && (
              <FormRegisterData
                email={this.state.email}
                password={this.state.password}
                cpf={this.state.cpf}
                confirmPassword={this.state.confirmPassword}
                onChange={(event) => this.handleChangeFormRegisterData(event)}
                onSubmit={(event) => this.handleSubmitFormRegisterData(event)}
              />
            )}

            {this.state.displayFormSuccessData !== false && (
              <FormSuccessData
                displaySuccessMergeAccount={
                  this.state.displaySuccessMergeAccount
                }
                onClick={(event) => this.onClickButtonResendEmail(event)}
                email={this.state.email}
              />
            )}
            {this.state.errorMessage !== "" && (
              <AlertsErrors message={this.state.errorMessage} />
            )}

            <a
              href="/#"
              className="go-back"
              onClick={(event) => this.onClickButtonModal(event, false)}
            >
              Voltar para o login
            </a>
          </ModalTemplate>
        )}
      </React.Fragment>
    );
  }
}
