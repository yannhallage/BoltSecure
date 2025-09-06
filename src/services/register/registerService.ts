// src/services/register/register.service.ts
import { Http } from "@/api/http";
import { ENDPOINTS } from "@/api/register/Endpoint";
import type { IAuthEmailInput, IAuthmotDePasseInput, IAuthResponseUser, IAuthOtpVerificationInput, IAuthMasterKeyInput } from "@/validations/register.zod";


export interface AuthEmailResponse {
    message: string;
}


export class RegisterService {

    static async verifyOtp({ email, otp }: IAuthOtpVerificationInput): Promise<IAuthOtpVerificationInput> {
        const data = await Http(ENDPOINTS.verifyOtp, {
            method: "POST",
            body: { email, otp },
        });
        return data as IAuthOtpVerificationInput;
    }

    static async Email(email: IAuthEmailInput): Promise<AuthEmailResponse> {
        const data = await Http(ENDPOINTS.email, {
            method: "POST",
            body: { email },
        });
        return data as AuthEmailResponse;
    }

    static async Password(password: IAuthmotDePasseInput): Promise<IAuthResponseUser> {
        const data = await Http(ENDPOINTS.password, {
            method: "POST",
            body: { password },
        });
        return data as IAuthResponseUser;
    }
    static async MasterKey(masterKey: IAuthMasterKeyInput): Promise<IAuthResponseUser> {
        const data = await Http(ENDPOINTS.masterKey, {
            method: "POST",
            body: { masterKey },
        });
        return data as IAuthResponseUser;
    }

    // -----------------------
    // Placeholder pour d'autres méthodes d'inscription
    // -----------------------
    // async registerWithEmail(payload: RegisterEmailPayload) {...}
    // async registerWithGoogle(token: string) {...}
}
