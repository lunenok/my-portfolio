import './style.scss'
import './images/project1.jpg'
import './images/project2.jpg'
import './images/project3.jpg'
import './images/project1-hr.jpg'
import './images/project2-hr.jpg'
import './images/project3-hr.jpg'
import './images/project1.webp'
import './images/project2.webp'
import './images/project3.webp'
import './images/project1-hr.webp'
import './images/project2-hr.webp'
import './images/project3-hr.webp'
import './images/project4.jpg'
import './images/project4.webp'
import earth from './images/earth.png';

const buttons = document.querySelectorAll('.works__button');
const cards = document.querySelectorAll('.works__example-item');

const toFilterCards = (type) => {
    cards.forEach((card) => {
        card.classList.add('hidden');
        if (type === 'all') {
            card.classList.remove('hidden');
        }
        if (card.dataset.type === type) {
            card.classList.remove('hidden');
        }
    });
};

buttons.forEach((button)=>{
    button.addEventListener('click', (evt) => {
        toFilterCards(evt.currentTarget.dataset.set);
    });
});