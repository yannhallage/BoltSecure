export interface PasswordItem {
    _id: string;
    titre: string;
    identifiant: string;
    motDePasse: string;
    reference?: {
        type: string;
        valeur: string;
    };
    proprietaireId: string;
    dateCreation: string; 
    dateModification: string;  
    __v: number;
}
