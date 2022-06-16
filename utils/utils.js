import moment from 'moment';

export function getFormattedDate() {
    return moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
}

export function recountTotal(container, amount) {
    const oldValue = Number(container.innerHTML.slice(0, -1));
    container.innerHTML = `${oldValue + amount}$`;
}
