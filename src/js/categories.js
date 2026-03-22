import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/categories.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import VerticalMenu from './components/VerticalMenu';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Categories page loaded with its styles');
});

// Получаем кнопку по ID
var buttonUp = document.getElementById("buttonUp");
// Обработчик скролла: показываем/скрываем кнопку
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  // Показываем кнопку, если проскроллили больше 20 px
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonUp.style.display = "block";
  } else {
    // Скрываем, если вернулись наверх
    buttonUp.style.display = "none";
  }
}

buttonUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const verticalMenu = document.getElementById('vertical-menu');

const rootVerticalMenu = createRoot(verticalMenu);
rootVerticalMenu.render(<VerticalMenu db={db} showAll={false} />);