import '../js/custom-select.js';

const searchBarSort = document.querySelector('.search-bar__sort');

searchBarSort.addEventListener('click', (event) => {
  event.target.classList.toggle('reverse');
});

const priceModal = document.getElementById('priceModal');
const priceMin = document.getElementById('priceMin');
const priceMax = document.getElementById('priceMax');
const priceButton = document.getElementById('priceButton');

priceButton.addEventListener('click', () => priceModal.classList.remove('hide'));

priceModal.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('modal__overlay')) priceModal.classList.add('hide');
  if (target.classList.contains('modal__close')) priceModal.classList.add('hide');
  if (target.classList.contains('price-modal__button_reset')) {
    priceMin.value = '';
    priceMax.value = '';
  }
  if (target.classList.contains('price-modal__button_apply')) {
    const hasPriceLimits = priceMin.value || priceMax.value;
    const priceButtonText = `от ${Number(priceMin.value)} ₽  до ${Number(priceMax.value)} ₽`;
    priceButton.innerText = hasPriceLimits ? priceButtonText : 'Цена';
    priceModal.classList.add('hide');
  }
});

const dateButton = document.getElementById('dateButton');
const recommendButton = document.getElementById('recommendButton');
const usersButton = document.getElementById('usersButton');
