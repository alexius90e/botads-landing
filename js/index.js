import '../js/custom-select.js';
import '../js/price-modal.js';
import '../js/date-modal.js';

const searchBarSort = document.querySelector('.search-bar__sort');

searchBarSort.addEventListener('click', (event) => {
  event.target.classList.toggle('reverse');
});

const recommendButton = document.getElementById('recommendButton');
const usersButton = document.getElementById('usersButton');

const filterSearchBar = document.querySelector('.filter__search-bar');
const filterSearchButton = document.querySelector('.filter__search');

filterSearchButton.addEventListener('click', () => {
  filterSearchBar.classList.toggle('active');
});

filterSearchBar.addEventListener('click', (event) => {
  const isCloseButton = event.target.classList.contains('filter__search-bar-back');
  if (isCloseButton) filterSearchBar.classList.remove('active');
});
