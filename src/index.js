import './style.scss';

(() => {

  const settings = {
    defaultValue: 'price',
    buttonsActiveClass: 'tabs__button--active',
  };

  const TABS = [...document.querySelectorAll('.tabs__button')];
  const SELECT = document.querySelector('.select');

  function removeClass(element, className) {
    const elements = [...element];
    elements.forEach((item) => item.classList.remove(className));
  };

  changeSortBy(settings.defaultValue);

  TABS.forEach((el) => {
    el.addEventListener('click', (evt) => {
      evt.preventDefault();

      changeSortBy(el.dataset.value);
    });
  });

  SELECT.addEventListener('change', (evt) => {
    changeSortBy(evt.target.value);
  });


  function changeSortBy(val) {
    const tabItem = TABS.find((el) => el.dataset.value === val);

    if ( !tabItem ) return;

    removeClass(TABS, settings.buttonsActiveClass);
    tabItem.classList.add(settings.buttonsActiveClass);
    SELECT.value = val;
  };


})();
