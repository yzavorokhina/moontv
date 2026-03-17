import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
// import '../scss/index.scss';
import '../scss/category.scss';
import { createRoot } from 'react-dom/client';
import * as categories from '../db/categories.json';
import * as streams from '../db/streams.json';
import * as channels from '../db/channels.json';
import ChannelCard from './components/channelCard';
import VerticalMenu from './components/VerticalMenu';


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
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Показываем кнопку, если проскроллили больше 20 px
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonUp.style.display = "block";
  } else {
    // Скрываем, если вернулись наверх
    buttonUp.style.display = "none";
  }
}

buttonUp.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const categoryId = +params.id || 1;
const categoryData = categories.find(category => category.id === categoryId);
const streamData = streams.find(stream => stream.categoryId === categoryId);
const channelData = channels.find(channel => channel.id === streamData.channelId);

const categoryCards = document.getElementById('category_cards');
const root = createRoot(categoryCards);

root.render(<ChannelCard categoryId={categoryId} showAll={true} />);

console.log({ params, streamData, channelData });

const verticalMenu = document.getElementById('vertical-menu');
const categoryTitle = document.getElementById("categoryTitle");
const categoryDes = document.getElementById("categoryDes");
const categoryImage = document.getElementById("categoryImage");
const categoryAudience = document.getElementById("categoryAudience");
const categoryFollowers = document.getElementById("categoryFollowers");

const rootVerticalMenu = createRoot(verticalMenu);
rootVerticalMenu.render(<VerticalMenu showAll={false} />);

categoryTitle.textContent = categoryData.name;
categoryDes.textContent = categoryData.description;
categoryImage.src = categoryData.imageUrl;
categoryAudience.textContent = categoryData.audience;
categoryFollowers.textContent = categoryData.followers;