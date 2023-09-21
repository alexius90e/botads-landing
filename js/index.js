import '../js/notifications.js';
import '../js/menu.js';
import '../js/custom-select.js';
import '../js/modals.js';
import '../js/input-code.js';

const findDepositsButton = document.querySelector('.search .search__find-deposits');

if (findDepositsButton) {
  findDepositsButton.addEventListener('click', () => (window.location.href = './search.html'));
}
