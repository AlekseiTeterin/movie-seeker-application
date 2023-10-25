export default function LSKeyBuilder(key) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user?.userName) {
        return key + user.userName;
    }
    return '';
}