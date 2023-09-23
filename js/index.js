import '../js/custom-select.js';

const searchBarSort = document.querySelector('.search-bar__sort');

searchBarSort.addEventListener('click', (event) => {
  event.target.classList.toggle('reverse');
});
