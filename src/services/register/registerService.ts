// src/services/register/register.service.ts
import { Http } from "@/api/http";
import { ENDPOINTS } from "@/api/register/Endpoint";
import type { IAuthEmailInput, IAuthmotDePasseInput, IAuthResponseUser, IAuthOtpVerificationInput, IAuthMasterKeyInput } from "@/validations/register.zod";
import { email } from 'zod';


export interface AuthEmailResponse {
    message: string;
}


export class RegisterService {

    static async verifyOtp({ email, otp }: IAuthOtpVerificationInput): Promise<IAuthOtpVerificationInput> {
        const data = await Http(ENDPOINTS.verifyOtp, {
            method: "POST",
            body: { email, otp },
        });
        // return data as IAuthOtpVerificationInput;
        const user = data as IAuthResponseUser;
        if (user) console.log('user: ', user.userId)
        return data
    }

    static async Email(email: string): Promise<AuthEmailResponse> {
        const data = await Http(ENDPOINTS.email, {
            method: "POST",
            body: { email },
        });
        return data as AuthEmailResponse;
    }

    static async Password( email: string, motDePasse :string,otp:string): Promise<IAuthResponseUser> {
        const data = await Http(ENDPOINTS.password, {
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
        const data = await Http(ENDPOINTS.masterKey, {
            method: "POST",
            body: {
                email,
                motDePasse,
                otp,
                masterKey, // ✅ camelCase exact
            },
        });
        const user = data as IAuthResponseUser;
        if (user) console.log('user: ', user.userId)
        return data;
    }


    // -----------------------
    // Placeholder pour d'autres méthodes d'inscription
    // -----------------------
    // async registerWithEmail(payload: RegisterEmailPayload) {...}
    // async registerWithGoogle(token: string) {...}
}
