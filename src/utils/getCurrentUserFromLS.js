function getCurrentUserFromLS() {
    if(localStorage.getItem('currentUser') !== null) {
        return JSON.parse(localStorage.getItem('currentUser'))
    } 
    return {userName: '', userPassword: '',}
    
}

export default getCurrentUserFromLS;