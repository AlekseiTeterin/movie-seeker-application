/* eslint-disable no-unused-expressions */
export default function getTimeStamp() {
    const date = new Date();

    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear() % 100;
    let hh = date.getHours();
    let mn = date.getMinutes();

    dd < 10 ? dd = `0${dd}` : dd;
    mm < 10 ? mm = `0${mm}` : mm;
    yy < 10 ? yy = `0${yy}` : yy;
    hh < 10 ? hh = `0${hh}` : hh;
    mn < 10 ? mn = `0${mn}` : mn;

    return `${hh}:${mn} ${dd}.${mm}.20${yy}`;
}