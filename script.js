const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#contact-form');
const status = document.querySelector('.form__status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Спасибо! Форма работает в демонстрационном режиме. Мы добавим отправку заявок на следующем этапе.';
  form.reset();
});
