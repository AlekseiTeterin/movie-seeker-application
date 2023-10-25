function getDataFromLS(key) {
    return JSON.parse(localStorage.getItem(key))
}

export default getDataFromLS;