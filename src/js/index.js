import _ from 'lodash';
import '../scss/index.scss';

// Импорт стилей Bootstrap
// import '../scss/vendors/_bootstrap.scss';

// Импорт JavaScript Bootstrap (если нужны компоненты)
// import 'bootstrap';

// Или выборочно:
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/dropdown';

// Импорт всего JavaScript Bootstrap
// import * as bootstrap from 'bootstrap';

/* Скрыть всплывающий блок уведомления на главной странице: */
/* вариант 1: */
// document.getElementById('closeButton').addEventListener('click', function() {
//   document.getElementById('myElement').style.display = 'none';
// });
/* вариант 2: */
// document.getElementById('closeButton').addEventListener('click', function() {
//   document.getElementById('myElement').classList.add('hidden');
// });

/* вариант 3 (более плавное исчезновение блока): */
document.getElementById('closeButton').addEventListener('click', function() {
  const element = document.getElementById('myElement');
  element.classList.add('fade-out');
  // Удаляем элемент из потока после завершения анимации
  setTimeout(() => {
    element.style.display = 'none';
  }, 500);
});

// /* MY TODO: сделать переключение темы оформления: */
// document.getElementById('themeToggle').addEventListener('click', function() {
//   const currentTheme = document.getElementById('themeStyles').href;
//   if (currentTheme.includes('light.css')) {
//     document.getElementById('themeStyles').href = '../css/dark.css';
//   } else {
//     document.getElementById('themeStyles').href = '../css/light.css';
//   }
// });