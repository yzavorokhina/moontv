import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/categories.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import Header from './components/Header.js';
import SearchForm from './components/SearchForm';
import VerticalMenu from './components/VerticalMenu';
import HorizontalMenu from './components/HorizontalMenu';
import Footer from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Categories page loaded with its styles');
});

const header = document.getElementById('react-header');
const verticalMenu = document.getElementById('vertical-menu');
const horizontalMenu = document.getElementById('react-horizontal-menu');

const rootHeader = createRoot(header);
rootHeader.render(<Header />);

const rootVerticalMenu = createRoot(verticalMenu);
rootVerticalMenu.render(<VerticalMenu db={db} showAll={false} />);

const rootHorizontalMenu = createRoot(horizontalMenu);
rootHorizontalMenu.render(<HorizontalMenu db={db} />);

const footer = document.getElementById('react-footer');
const rootFooter = createRoot(footer);
rootFooter.render(<Footer />);