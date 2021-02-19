import { validatorEmail, validatorIdenticalEmail } from "./Validator/Email";
import {validatorIdenticalPassword, validatorPassword} from "./Validator/Password";
import {validatorCPF} from "./Validator/CPF"
import {enCrypto, deCrypto} from "./Validator/Crypt"
import {isAuthorizated} from "./Validator/Token"


export {
    validatorEmail,
    validatorIdenticalEmail,
    validatorIdenticalPassword,
    validatorPassword,
    validatorCPF,
    enCrypto,
    deCrypto,
    isAuthorizated
}