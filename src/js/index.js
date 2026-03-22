import _ from 'lodash';
import '../scss/home.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import SearchForm from './components/SearchForm';
import VerticalMenu from './components/VerticalMenu';
import HorizontalMenu from './components/HorizontalMenu';
import ChannelCard from './components/channelCard';


/* A pop-up orange-row notification: */
/* вариант 3 (более плавное исчезновение блока): */
document.getElementById('closeButton').addEventListener('click', function () {
  const element = document.getElementById('myElement');
  element.classList.add('fade-out');
  // Удаляем элемент из потока после завершения анимации
  setTimeout(() => {
    element.style.display = 'none';
  }, 500);
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

const searchFormBlock = document.getElementById('search-form-block');
const verticalMenu = document.getElementById('vertical-menu');
const horizontalMenu = document.getElementById('react-horizontal-menu');
const favoriteSoftwareDev = document.getElementById('favorite_software_development');
const favoriteMusic = document.getElementById('favorite_music');
const favoriteEnglish = document.getElementById('favorite_english');
const favoriteDJs = document.getElementById('favorite_djs');
const favoriteDance = document.getElementById('favorite_dance');
const favoriteReading = document.getElementById('favorite_reading');
const favoriteTDU2 = document.getElementById('favorite_tdu2');
const favoriteSkyrim = document.getElementById('favorite_skyrim');

const rootSearchFormBlock = createRoot(searchFormBlock);
rootSearchFormBlock.render(<SearchForm />);

const rootVerticalMenu = createRoot(verticalMenu);
rootVerticalMenu.render(<VerticalMenu db={db} showAll={false} />);

const rootHorizontalMenu = createRoot(horizontalMenu);
rootHorizontalMenu.render(<HorizontalMenu />);

let categoryId = 1;
const rootSoftwareDev = createRoot(favoriteSoftwareDev);
rootSoftwareDev.render(<ChannelCard db={db} categoryId={categoryId} />);

categoryId = 2;
const rootMusic = createRoot(favoriteMusic);
rootMusic.render(<ChannelCard db={db} categoryId={categoryId} />);

categoryId = 3;
const rootEnglish = createRoot(favoriteEnglish);
rootEnglish.render(<ChannelCard db={db} categoryId={categoryId} />);

categoryId = 4;
const rootDJs = createRoot(favoriteDJs);
rootDJs.render(<ChannelCard db={db} categoryId={categoryId} />);

categoryId = 5;
const rootDance = createRoot(favoriteDance);
rootDance.render(<ChannelCard db={db} categoryId={categoryId} />);

categoryId = 6;
const rootReading = createRoot(favoriteReading);
rootReading.render(<ChannelCard db={db} categoryId={categoryId} />);

categoryId = 7;
const rootTDU2 = createRoot(favoriteTDU2);
rootTDU2.render(<ChannelCard db={db} categoryId={categoryId} />);

categoryId = 8;
const rootSkyrim = createRoot(favoriteSkyrim);
rootSkyrim.render(<ChannelCard db={db} categoryId={categoryId} />);

// /* MY TODO: сделать переключение темы оформления: */
// document.getElementById('themeToggle').addEventListener('click', function() {
//   const currentTheme = document.getElementById('themeStyles').href;
//   if (currentTheme.includes('light.css')) {
//     document.getElementById('themeStyles').href = '../css/dark.css';
//   } else {
//     document.getElementById('themeStyles').href = '../css/light.css';
//   }
// });