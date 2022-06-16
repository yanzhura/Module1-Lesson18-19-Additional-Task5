import './index.css';
import Donate from './core/Donate';
import { recountTotal } from './utils/utils';

const donateForm = document.querySelector('.donate-form');
const donateTotal = document.querySelector('#total-amount');
const donatesList = document.querySelector('.donates-container__donates');

function donateFormHander(event) {
    event.preventDefault();
    const amount = Number(event.target[0].value);
    const donate = new Donate(Date.now(), amount);
    donate.render(donatesList);
    event.target[0].value = '';
    recountTotal(donateTotal, amount);
}

donateForm.addEventListener('submit', donateFormHander);
