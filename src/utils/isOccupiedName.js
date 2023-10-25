const isOccupiedName = (login) => {
    let usersArr = [];
    if (localStorage.getItem('users') !== null) {
        usersArr = Array.from(JSON.parse(localStorage.getItem('users')));
    }

    return usersArr.some((element) => element.userName === login);
};

export default isOccupiedName;
