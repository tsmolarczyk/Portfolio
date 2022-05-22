window.onbeforeunload = function (e) {
  document.cookie = 'cookiename=; expires=' + d.toGMTString() + ';';
};

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const list = document.querySelector('.navigation__list');
const picture = document.querySelector('.header-logo-container');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
  if (hamburger.classList.contains('hamburger--active')) {
    picture.classList.add('hidden');
  }
  if (!hamburger.classList.contains('hamburger--active')) {
    picture.classList.remove('hidden');
  }
};

const close = () => {
  nav.classList.toggle('navigation--active');
  hamburger.classList.toggle('hamburger--active');
  if (hamburger.classList.contains('hamburger--active')) {
    picture.classList.add('hidden');
  }
  if (!hamburger.classList.contains('hamburger--active')) {
    picture.classList.remove('hidden');
  }
};

hamburger.addEventListener('click', handleClick);
list.addEventListener('click', close);
