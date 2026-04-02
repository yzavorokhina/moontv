import _ from 'lodash';
import '../scss/home.scss';
import '../scss/search.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import { getUrlParams } from '../js/utils/common.js';
import Header from './components/Header.js';
import SearchCards from './components/SearchCards';
import VerticalMenu from './components/VerticalMenu';
import HorizontalMenu from './components/HorizontalMenu';
import Footer from './components/Footer.js';

// Использование
const params = getUrlParams();
console.log({ params }); // '1'

const search = params.q || "";

const header = document.getElementById('react-header');
const rootHeader = createRoot(header);
rootHeader.render(<Header />);

const categoryCards = document.getElementById('search_result');
const root = createRoot(categoryCards);

root.render(<SearchCards db={db} search={search} showAll={true} />);

const horizontalMenu = document.getElementById('react-horizontal-menu');
const rootHorizontalMenu = createRoot(horizontalMenu);
rootHorizontalMenu.render(<HorizontalMenu db={db} />);

const verticalMenu = document.getElementById('vertical-menu');
const rootVerticalMenu = createRoot(verticalMenu);
rootVerticalMenu.render(<VerticalMenu db={db} showAll={false} />);

const footer = document.getElementById('react-footer');
const rootFooter = createRoot(footer);
rootFooter.render(<Footer />);