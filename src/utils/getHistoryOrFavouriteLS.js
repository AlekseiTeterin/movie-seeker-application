import LSKeyBuilder from "./LSKeyBuilder";

function getHistoryOrFavouriteLS(key) {
    if(key === 'history' && localStorage.getItem(LSKeyBuilder('history')) !== null) {
        return JSON.parse(localStorage.getItem(LSKeyBuilder('history')))
    }
    if(key === 'favourite' && localStorage.getItem(LSKeyBuilder('favourite')) !== null) {
        return JSON.parse(localStorage.getItem(LSKeyBuilder('favourite')))
    }
    return [];
    
}

export default getHistoryOrFavouriteLS;