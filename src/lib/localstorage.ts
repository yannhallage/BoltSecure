

export const setSession = (data: string, type: string) => {
    if (type === 'email'){
        localStorage.setItem('email', data);
    }else{
        localStorage.setItem('utilisateur', data);
    }
    console.log('session créée')
};  

export const LocalStorage = (response: string , type:string) => {

    if(type === 'email'){
        return setSession(response , 'email')
    }else{
        return setSession(response , 'utilisateur')
    }

}

export const removeSession = () => {
    localStorage.clear();
    console.log('session suppremée')
};


export const getSession = () => {
    const email = localStorage.getItem('email');
    const user = localStorage.getItem('utilisateur');

    return {
        email: email,
        user: user
    }
};