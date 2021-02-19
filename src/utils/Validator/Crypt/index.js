import CryptoJS from "crypto-js";

/**
 * Function Encrypto
 * @param {any} decrypted
 * @returns {string}
 */
export function enCrypto(decrypted) {
  let message = "";

  switch (typeof decrypted) {
    case "object":
      message = JSON.stringify(decrypted);
      break;
    case "string":
      message = decrypted;
      break;
    default:
      message = String(decrypted);
  }

  
  const messageHex = CryptoJS.enc.Utf8.parse(message);
  const encrypted = CryptoJS.AES.encrypt(messageHex, {
   
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString();
}

/**
 * Function Decrypto
 * @param {string} encrypted
 * @returns {string}
 */
export function deCrypto(encrypted) {  
  const decrypt = CryptoJS.AES.decrypt(encrypted,{  
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return JSON.parse(decrypt.toString(CryptoJS.enc.Utf8));
}
