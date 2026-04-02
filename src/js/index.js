import _ from 'lodash';
import '../scss/main.scss';
import '../scss/home.scss';
import '../scss/components/_banner.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import Header from './components/Header';
import VerticalMenu from './components/VerticalMenu';
import HorizontalMenu from './components/HorizontalMenu';
import Banner from './components/banner';
import ChannelCard from './components/channelCard';
import Footer from './components/Footer';


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

const header = document.getElementById('react-header');
const rootHeader = createRoot(header);
rootHeader.render(<Header />);

// react-banner
const banner = document.getElementById('react-banner');
const rootBanner = createRoot(banner);
rootBanner.render(<Banner />);

const verticalMenu = document.getElementById('vertical-menu');
const rootVerticalMenu = createRoot(verticalMenu);
rootVerticalMenu.render(<VerticalMenu db={db} showAll={false} />);

const horizontalMenu = document.getElementById('react-horizontal-menu');
const rootHorizontalMenu = createRoot(horizontalMenu);
rootHorizontalMenu.render(<HorizontalMenu db={db} />);

const favoriteSoftwareDev = document.getElementById('favorite_software_development');
let categoryId = 1;
const rootSoftwareDev = createRoot(favoriteSoftwareDev);
rootSoftwareDev.render(<ChannelCard db={db} categoryId={categoryId} />);

const favoriteMusic = document.getElementById('favorite_music');
categoryId = 2;
const rootMusic = createRoot(favoriteMusic);
rootMusic.render(<ChannelCard db={db} categoryId={categoryId} />);

const favoriteEnglish = document.getElementById('favorite_english');
categoryId = 3;
const rootEnglish = createRoot(favoriteEnglish);
rootEnglish.render(<ChannelCard db={db} categoryId={categoryId} />);

const favoriteDJs = document.getElementById('favorite_djs');
categoryId = 4;
const rootDJs = createRoot(favoriteDJs);
rootDJs.render(<ChannelCard db={db} categoryId={categoryId} />);

const favoriteDance = document.getElementById('favorite_dance');
categoryId = 5;
const rootDance = createRoot(favoriteDance);
rootDance.render(<ChannelCard db={db} categoryId={categoryId} />);

const favoriteReading = document.getElementById('favorite_reading');
categoryId = 6;
const rootReading = createRoot(favoriteReading);
rootReading.render(<ChannelCard db={db} categoryId={categoryId} />);

const favoriteTDU2 = document.getElementById('favorite_tdu2');
categoryId = 7;
const rootTDU2 = createRoot(favoriteTDU2);
rootTDU2.render(<ChannelCard db={db} categoryId={categoryId} />);

const favoriteSkyrim = document.getElementById('favorite_skyrim');
categoryId = 8;
const rootSkyrim = createRoot(favoriteSkyrim);
rootSkyrim.render(<ChannelCard db={db} categoryId={categoryId} />);

const footer = document.getElementById('react-footer');
const rootFooter = createRoot(footer);
rootFooter.render(<Footer />);