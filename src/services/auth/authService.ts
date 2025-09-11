import { Http } from "@/api/http";
// import { LocalStorage } from "@/lib/localstorage";

import { ENDPOINTS_AUTH } from "@/api/auth/Endpoint";
import type { IAuthEmailInput, IAuthmotDePasseInput, IAuthResponseUser, IAuthOtpVerificationInput, IAuthMasterKeyInput } from "@/validations/register.zod";
import { LocalStorage } from "@/lib/localstorage";


export interface AuthEmailResponse {
    message: string;
}


export class AuthService {

    static async Email(email: string): Promise<AuthEmailResponse> {
        const data = await Http(ENDPOINTS_AUTH.email, {
            method: "POST",
            body: { email },
        });
        return data as AuthEmailResponse;
    }

    static async Password(email: string, motDePasse: string): Promise<IAuthResponseUser> {
        const data = await Http(ENDPOINTS_AUTH.password, {
            method: "POST",
            body: {
                email,
                motDePasse,
            },
        });
        const user = data as IAuthResponseUser;
        if (user) console.log('user: ', user.userId)
        return data
    }

    static async MasterKey(email: string, motDePasse: string, masterKey: string): Promise<IAuthResponseUser> {
        const data = await Http(ENDPOINTS_AUTH.masterKey, {
            method: "POST",
            body: {
                email,
                motDePasse,
                masterKey,
            },
        });

        if (data) {
            LocalStorage(data.user._id, 'utilisateur');
            LocalStorage(data.user.email, 'email');
            console.log('sesssion ouverte !' + Date.now());
        } else {
            console.log('un porbleme d\'ouverture de session !' + Date())
        }

        if (data) console.log('data: ', data.user.user._id)
        // console.log(data.user.token_connexion)
        LocalStorage(data.user.token_connexion, 'token_connexion')
        return data;
    }
}
