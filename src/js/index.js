import $ from 'jquery';
import _ from 'lodash';
import '../scss/index.scss';


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