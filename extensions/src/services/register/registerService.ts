// src/services/register/register.service.ts
import { Http } from "../../api/http";
import { ENDPOINTS_REGISTER } from "../../api/register/Endpoint";
import { LocalStorage } from "../../lib/localstorage";
// import type { IAuthEmailInput, IAuthmotDePasseInput, IAuthResponseUser, IAuthOtpVerificationInput, IAuthMasterKeyInput } from "../../validations/register.zod";
import type { IAuthResponseUser, IAuthOtpVerificationInput } from "../../validations/register.zod";
// import { email } from 'zod';


export interface AuthEmailResponse {
    message: string;
}


export class RegisterService {

    static async verifyOtp({ email, otp }: IAuthOtpVerificationInput): Promise<IAuthOtpVerificationInput> {
        const data = await Http(ENDPOINTS_REGISTER.verifyOtp, {
            method: "POST",
            body: { email, otp },
        });
        // return data as IAuthOtpVerificationInput;
        const user = data as IAuthResponseUser;
        if (user) console.log('user: ', user.userId)
        return data
    }

    static async Email(email: string): Promise<AuthEmailResponse> {
        const data = await Http(ENDPOINTS_REGISTER.email, {
            method: "POST",
            body: { email },
        });
        return data as AuthEmailResponse;
    }

    static async Password(email: string, motDePasse: string, otp: string): Promise<IAuthResponseUser> {
        const data = await Http(ENDPOINTS_REGISTER.password, {
            method: "POST",
            body: {
                email,
                motDePasse,
                otp,
            },
        });
        const user = data as IAuthResponseUser;
        if (user) console.log('user: ', user.userId)
        return data
    }

    static async MasterKey(email: string, motDePasse: string, otp: string, masterKey: string): Promise<IAuthResponseUser> {
        const data = await Http(ENDPOINTS_REGISTER.masterKey, {
            method: "POST",
            body: {
                email,
                motDePasse,
                otp,
                masterKey,
            },
        });
        // const user = data;
        if (data) console.log('user: ', data.user._id, data.token_connexion)
        LocalStorage(data.user.token_connexion, 'token_connexion')
        return data;
    }
}
