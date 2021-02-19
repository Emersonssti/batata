import IP from "ip";
import Bowser from "bowser";
import JWT from "jsonwebtoken";

import {deCrypto} from '../Crypt/index'

/**
 * Function Authorize Token
 */
export const isAuthorizated = () => {
  const ip = IP.address();
  const token = localStorage.getItem("token");
  const browserParse = Bowser.getParser(window.navigator.userAgent);
  const browser = browserParse.getBrowserName();

  return JWT.verify(token , function (err, decoded) {
    if (err) {
      localStorage.removeItem("token");
      return false;
    }

    const response = deCrypto(decoded.data);

    if (!(browser === response.browser) && ip === response.ip) {
      localStorage.removeItem("token");
      return false;
    }

    return true;
  });
};
