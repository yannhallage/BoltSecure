
// import type { IAuthEmailInput, IAuthmotDePasseInput, IAuthResponseUser, IAuthOtpVerificationInput, IAuthMasterKeyInput } from "../../validations/register.zod";
import type { IAuthResponseUser } from "../../validations/register.zod";
import { Http } from "../../api/http";
import { ENDPOINTS_AUTH } from "../../api/auth/Endpoint";
// import { LocalStorage } from "../../lib/localstorage";
import { storage } from "../../lib/storage";


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
            // LocalStorage(data.user._id, 'utilisateur');
            // LocalStorage(data.user.email, 'email');
            await storage.set({ utilisateur: data.user._id });
            console.log('sesssion ouverte !');
        } else {
            console.log('un porbleme d\'ouverture de session !')
        }
        await storage.set({ token_connexion: data.token_connexion });
        // LocalStorage(data.token_connexion, 'token_connexion')
        return data;
    }
}
