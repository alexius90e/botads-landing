const customSelects = document.querySelectorAll('.custom-select');

customSelects.forEach((customSelect) => {
  const isLanguageSelect = customSelect.parentNode.classList.contains('language');
  const selectElem = customSelect.querySelector('select');
  const options = selectElem.options;

  const selectOverlay = document.createElement('div');
  selectOverlay.setAttribute('class', 'select-overlay select-hide');

  const selectSelected = document.createElement('div');
  selectSelected.classList.add('select-selected');

  selectSelected.innerHTML = `<span>${
    isLanguageSelect
      ? selectElem.options[selectElem.selectedIndex].value.toUpperCase()
      : selectElem.options[selectElem.selectedIndex].innerHTML
  }</span>`;

  const selectItems = document.createElement('div');
  selectItems.setAttribute('class', 'select-items select-hide');

  if (isLanguageSelect) {
    const header = document.createElement('div');
    header.classList.add('select-items__header');
    header.innerText = 'Language';
    selectItems.append(header);
  }

  [...options].forEach((option, index) => {
    const optionElem = document.createElement('div');
    optionElem.classList.add('select-item');
    optionElem.classList.add(`select-item_${option.value}`);
    optionElem.innerHTML = option.innerHTML;
    if (index === 0) optionElem.classList.add('same-as-selected');
    selectItems.append(optionElem);

    optionElem.addEventListener('click', () => {
      const sameAsSelected = selectItems.querySelector('.same-as-selected');
      const changeEvent = new Event('change');
      selectSelected.innerHTML = `<span>${
        isLanguageSelect ? option.value.toUpperCase() : option.innerHTML
      }</span>`;
      selectElem.value = option.value;
      customSelect.dataset.value = selectElem.value;
      sameAsSelected.classList.remove('same-as-selected');
      optionElem.classList.add('same-as-selected');
      selectElem.dispatchEvent(changeEvent);
    });
  });

  customSelect.append(selectSelected, selectItems, selectOverlay);

  selectSelected.addEventListener('click', function (e) {
    e.stopPropagation();
    closeAllSelect();
    selectOverlay.classList.toggle('select-hide');
    selectItems.classList.toggle('select-hide');
  });
});

function closeAllSelect() {
  const selectOverlayElements = document.querySelectorAll('.select-overlay');
  const selectItemsElements = document.querySelectorAll('.select-items');
  const selectSelectedElements = document.querySelectorAll('.select-selected');

  selectSelectedElements.forEach((element) => element.classList.remove('select-arrow-active'));
  selectItemsElements.forEach((element) => element.classList.add('select-hide'));
  selectOverlayElements.forEach((element) => element.classList.add('select-hide'));
}

document.addEventListener('click', closeAllSelect);
