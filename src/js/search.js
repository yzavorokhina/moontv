import _ from 'lodash';
import '../scss/home.scss';
import '../scss/search.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import SearchForm from './components/SearchForm';
import SearchCards from './components/SearchCards';
import VerticalMenu from './components/VerticalMenu';
import HorizontalMenu from './components/HorizontalMenu';
import { getUrlParams } from '../js/utils/common.js';

// Использование
const params = getUrlParams();
console.log({ params }); // '1'

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

const search = params.q || "";

const searchFormBlock = document.getElementById('search-form-block');
const rootSearchFormBlock = createRoot(searchFormBlock);
rootSearchFormBlock.render(<SearchForm />);

const categoryCards = document.getElementById('search_result');
const root = createRoot(categoryCards);

root.render(<SearchCards db={db} search={search} showAll={true} />);

const horizontalMenu = document.getElementById('react-horizontal-menu');
const rootHorizontalMenu = createRoot(horizontalMenu);
rootHorizontalMenu.render(<HorizontalMenu db={db} />);

const verticalMenu = document.getElementById('vertical-menu');
const rootVerticalMenu = createRoot(verticalMenu);
rootVerticalMenu.render(<VerticalMenu db={db} showAll={false} />);