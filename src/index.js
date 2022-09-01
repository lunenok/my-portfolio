import './styles/style.scss'
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
import './images/project5.jpg'
import './images/project5.webp'
import earth from './images/earth.png';

const buttons = document.querySelectorAll('.works__button');
const cards = document.querySelectorAll('.works__example-item');
const moreButtons = document.querySelectorAll('.works__more-button');
const popups = document.querySelectorAll('.popup');
// const dots = document.querySelectorAll('')

const toFilterCards = (type) => {    
    cards.forEach((card) => {
        // if (card.dataset.type !== type) {
        //     card.classList.add('destroyed')
        //     card.classList.remove('works__example-item')
        // }

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
        buttons.forEach(btn => btn.classList.remove('active'));
        evt.currentTarget.classList.add('active');
    });
});

moreButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
        const idx = evt.currentTarget.id;
        const currentPopus = popups[idx-1];
        console.log(evt.currentTarget.classList)
        if (currentPopus.classList.contains('popup__showed')) {
            currentPopus.classList.remove('popup__showed');
            currentPopus.classList.add('popup__closed');
            evt.currentTarget.classList.add('works__more-button__opened');
            evt.currentTarget.classList.remove('works__more-button__closed');
        } else {
            currentPopus.classList.add('popup__showed');
            currentPopus.classList.remove('popup__closed');
            evt.currentTarget.classList.remove('works__more-button__opened');
            evt.currentTarget.classList.add('works__more-button__closed');
        }
    });
});