// src/utils/crypto.ts
import CryptoJS from 'crypto-js';

const SECRET_KEY = 'ma_cle_secrete_123!';

export const encrypt = (data: string) => {
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

export const decrypt = (cipher: string) => {
    const bytes = CryptoJS.AES.decrypt(cipher, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};
