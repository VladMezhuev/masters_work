const iconMenu = document.getElementById('js-trigger')
iconMenu.addEventListener('click', () => {
  const menu = document.getElementById('js-menu')
  menu.classList.toggle('is-active')
  iconMenu.classList.toggle('is-active')
})

const searchBtn = document.getElementsByClassName('js-search')[0];
const headerSearch = document.getElementsByClassName('header-search')[0];
const input = document.getElementsByClassName('js-input')[0];
const jsButton = document.getElementsByClassName('js-button')[0];

searchBtn.addEventListener('click', () => {
  headerSearch.classList.toggle('is-active');
})

window.addEventListener('click', e => {
  if (e.target !== input && e.target !== searchBtn && e.target !== jsButton) {
    headerSearch.classList.remove('is-active');
  }
})
