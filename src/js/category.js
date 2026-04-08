import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/category.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper.js';
import { getUrlParams } from '../js/utils/common.js';
import Header from './components/Header.js';
import VerticalMenu from './components/VerticalMenu';
import HorizontalMenu from './components/HorizontalMenu';
import ChannelCards from './components/ChannelCards.js';
import Footer from './components/Footer.js';
import CategoryDescription from './components/CategoryDescription.js';

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

root.render(<ChannelCards db={db} categoryId={categoryId} showAll={true} />);

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

const categoryDescription = document.getElementById('react-category-description');
const rootCategoryDescription = createRoot(categoryDescription);
rootCategoryDescription.render(<CategoryDescription categoryData={categoryData} channelData={channelData} />);

const footer = document.getElementById('react-footer');
const rootFooter = createRoot(footer);
rootFooter.render(<Footer />);