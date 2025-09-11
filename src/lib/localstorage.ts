

export const setSession = (data: string, type: string) => {
    if (type === 'email') {
        localStorage.setItem('email', data);
    } else {
        localStorage.setItem('utilisateur', data);
    }

    if (type === 'token_connexion') {
        localStorage.setItem('token_connexion', data);
    }
    console.log('session créée', Date.now())
};

export const LocalStorage = (response: string, type: string) => {

    if (type === 'email') {
        return setSession(response, 'email');
    } else if (type === 'utilisateur') {
        return setSession(response, 'utilisateur');
    } else if (type === 'token_connexion') {
        return setSession(response, 'token_connexion');
    } else {
        return console.log('impossible de créer une session');
    }

}

export const removeSession = () => {
    localStorage.clear();
    console.log('session suppremée')
};

export const getSession = () => {
    const email = localStorage.getItem('email');
    const user = localStorage.getItem('utilisateur');
    const token_connexion = localStorage.getItem('token_connexion');


    return {
        email: email,
        user: user,
        token_connexion
    }
};