import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/category.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper.js';
import { getUrlParams } from '../js/utils/common.js';
import Header from './components/Header.js';
import VerticalMenu from './components/VerticalMenu';
import HorizontalMenu from './components/HorizontalMenu';
import ChannelCard from './components/channelCard';
import Footer from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Category page loaded with its styles');
});

// Использование
const params = getUrlParams();
console.log(params.id); // '1'

const categoryId = +params.id || 1;
const categoryData = db.categoriesModel.findOneById(categoryId);
const streamData = db.streamsModel.findOneById(categoryId);
const channelData = db.channelsModel.findOneById(streamData.channelId);

const categoryCards = document.getElementById('category_cards');
const root = createRoot(categoryCards);

root.render(<ChannelCard db={db} categoryId={categoryId} showAll={true} />);

console.log({ params, streamData, channelData });

const header = document.getElementById('react-header');
const rootHeader = createRoot(header);
rootHeader.render(<Header />);

const verticalMenu = document.getElementById('vertical-menu');
const rootVerticalMenu = createRoot(verticalMenu);
rootVerticalMenu.render(<VerticalMenu db={db} showAll={false} />);

const horizontalMenu = document.getElementById('react-horizontal-menu');
const rootHorizontalMenu = createRoot(horizontalMenu);
rootHorizontalMenu.render(<HorizontalMenu db={db} />);

const categoryTitle = document.getElementById("categoryTitle");
categoryTitle.textContent = categoryData.name;

const categoryDes = document.getElementById("categoryDes");
categoryDes.textContent = categoryData.description;

const categoryImage = document.getElementById("categoryImage");
categoryImage.src = categoryData.imageUrl;

const categoryAudience = document.getElementById("categoryAudience");
categoryAudience.textContent = categoryData.audience;

const categoryFollowers = document.getElementById("categoryFollowers");
categoryFollowers.textContent = categoryData.followers;

const footer = document.getElementById('react-footer');
const rootFooter = createRoot(footer);
rootFooter.render(<Footer />);