import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/category.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper.js';
import SearchForm from './components/SearchForm';
import VerticalMenu from './components/VerticalMenu';
import HorizontalMenu from './components/HorizontalMenu';
import ChannelCard from './components/channelCard';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Category page loaded with its styles');
});

function getUrlParams() {
  const search = window.location.search;
  if (!search) return {};

  const params = new URLSearchParams(search);
  const obj = {};

  for (let [key, value] of params) {
    obj[key] = value;
  }

  return obj;
}

// Использование
const params = getUrlParams();
console.log(params.id); // '1'

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

const categoryId = +params.id || 1;
const categoryData = db.categoriesModel.findOneById(categoryId);
const streamData = db.streamsModel.findOneById(categoryId);
const channelData = db.channelsModel.findOneById(streamData.channelId);

const categoryCards = document.getElementById('category_cards');
const root = createRoot(categoryCards);

root.render(<ChannelCard db={db} categoryId={categoryId} showAll={true} />);

console.log({ params, streamData, channelData });

const searchFormBlock = document.getElementById('search-form-block');
const verticalMenu = document.getElementById('vertical-menu');
const horizontalMenu = document.getElementById('react-horizontal-menu');
const categoryTitle = document.getElementById("categoryTitle");
const categoryDes = document.getElementById("categoryDes");
const categoryImage = document.getElementById("categoryImage");
const categoryAudience = document.getElementById("categoryAudience");
const categoryFollowers = document.getElementById("categoryFollowers");

const rootSearchFormBlock = createRoot(searchFormBlock);
rootSearchFormBlock.render(<SearchForm />);

const rootVerticalMenu = createRoot(verticalMenu);
rootVerticalMenu.render(<VerticalMenu db={db} showAll={false} />);

const rootHorizontalMenu = createRoot(horizontalMenu);
rootHorizontalMenu.render(<HorizontalMenu />);

categoryTitle.textContent = categoryData.name;
categoryDes.textContent = categoryData.description;
categoryImage.src = categoryData.imageUrl;
categoryAudience.textContent = categoryData.audience;
categoryFollowers.textContent = categoryData.followers;