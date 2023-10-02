import '../js/custom-select.js';
import '../js/price-modal.js';
import '../js/date-modal.js';

const searchBarSort = document.querySelector('.search-bar__sort');

searchBarSort.addEventListener('click', (event) => {
  event.target.classList.toggle('reverse');
});



const recommendButton = document.getElementById('recommendButton');
const usersButton = document.getElementById('usersButton');
