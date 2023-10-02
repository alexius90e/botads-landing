const dateButton = document.getElementById('dateButton');
const dateModal = document.getElementById('dateModal');
const dateModalBody = document.querySelector('.date-modal__body');
const dateModalClear = document.querySelector('.date-modal__clear');

dateButton.addEventListener('click', () => dateModal.classList.remove('hide'));

dateModal.addEventListener('click', (event) => {
  const target = event.target;
  const isOverlay = target.classList.contains('modal__overlay');
  const isCloseButton = target.classList.contains('modal__close');

  if (isOverlay || isCloseButton) dateModal.classList.add('hide');
});

dateModalBody.addEventListener('click', ({ target }) => {
  const isDayItemElem = target.classList.contains('date-modal__days-item-inner');
  const isDisabled = target.classList.contains('disabled');
  const options = { month: 'long', day: 'numeric' };
  const date = new Date(target.dataset.date).toLocaleDateString('ru-RU', options);
  if (!isDayItemElem || isDisabled) return;
  resetActiveDay();
  target.classList.add('active');
  dateButton.innerText = date;
});

dateModalClear.addEventListener('click', resetActiveDay);

function resetActiveDay() {
  const dayItems = document.querySelectorAll('.date-modal__days-item-inner');
  dayItems.forEach((item) => item.classList.remove('active'));
  dateButton.innerText = 'Дата';
}

function renderCalendar(wrapper) {
  const currentDate = new Date();
  const currentMonth = new Date().getMonth();
  const currentFullYear = new Date().getFullYear();
  const monthElements = new Array(3).fill(null).map((_, index) => {
    const date = new Date(currentFullYear, currentMonth + index);
    return renderMonth(date.toISOString());
  });

  wrapper.append(...monthElements);
}

function renderMonth(dateString) {
  const date = new Date(dateString);

  const monthElem = document.createElement('div');
  monthElem.classList.add('date-modal__month');

  const title = document.createElement('div');
  title.classList.add('date-modal__month-title');
  title.innerText = date.toLocaleString('ru-ru', { month: 'long' });

  const emptyDayItems = renderDayItems(date, true);
  const dayItems = renderDayItems(date);

  const days = document.createElement('div');
  days.classList.add('date-modal__days');
  days.append(...emptyDayItems, ...dayItems);

  monthElem.append(title, days);

  return monthElem;
}

function renderDayItems(date, isEmpty) {
  const dayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const numberOfEmptyDays = dayIndex ? dayIndex - 1 : 6;
  const numberOfRealDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const numberOfDays = isEmpty ? numberOfEmptyDays : numberOfRealDays;
  return new Array(numberOfDays).fill(null).map((_, index) => {
    const dayItemElement = document.createElement('div');
    const dayItemInnerElement = document.createElement('div');
    const dayDate = new Date(date.getFullYear(), date.getMonth(), index + 1);
    const currentDate = new Date();
    const isCurrent =
      dayDate.getFullYear() === currentDate.getFullYear() &&
      dayDate.getMonth() === currentDate.getMonth() &&
      dayDate.getDate() === currentDate.getDate();
    const isDisabled = dayDate < currentDate && !isCurrent;
    dayItemElement.classList.add('date-modal__days-item');
    if (isEmpty) return dayItemElement;
    dayItemInnerElement.classList.add('date-modal__days-item-inner');
    if (isDisabled) dayItemInnerElement.classList.add('disabled');
    if (isCurrent) dayItemInnerElement.classList.add('current');
    dayItemInnerElement.innerText = isEmpty ? '' : index + 1;
    dayItemInnerElement.dataset.date = dayDate.toLocaleString();
    dayItemElement.append(dayItemInnerElement);
    return dayItemElement;
  });
}

renderCalendar(dateModalBody);
