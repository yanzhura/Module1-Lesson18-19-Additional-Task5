import { getFormattedDate } from '../utils/utils';

class Donate {
    #date;
    #amount;
    #donateElement;
    constructor(date, amount) {
        this.#date = getFormattedDate(date);
        this.#amount = amount;
        this.#donateElement = this.#create(this.#date, this.#amount);
    }

    #create() {
        const donateElement = document.createElement('div');
        donateElement.className = 'donate-item';
        donateElement.innerText = `${this.#date} - `;
        const amountElement = document.createElement('b');
        amountElement.innerText = `${this.#amount}$`;
        donateElement.append(amountElement);
        return donateElement;
    }

    render(container) {
        container.append(this.#donateElement);
    }
}

export default Donate;
