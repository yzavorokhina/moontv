import _ from 'lodash';
import '../scss/home.scss';
import '../scss/search.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import SearchPage from './components/SearchPage.js';

const body = document.getElementById('react-body');
const rootBody = createRoot(body);
rootBody.render(<SearchPage db={db} showAll={true} />);