let OnTrashItems: string[] = JSON.parse(localStorage.getItem('itemOntrash') || "[]");

export const OnTrashStorage = (id: string) => {

    OnTrashItems.push(id);
    localStorage.setItem('itemOntrash', JSON.stringify(OnTrashItems));

    return console.log('Déplacé vers la corbeille');
};


export const GetTrashItems = () => {
    return JSON.parse(localStorage.getItem('itemOntrash') || "[]");
};
