
export interface  GoogleJwtPayload {
    email: string;
    name: string;
    picture: string;
    sub: string;   // identifiant unique Google
    exp: number;   // expiration (en secondes)
    iat: number;   // issued at
}

export interface GoogleUser {
    email: string;
    name: string;
    picture: string;
}
