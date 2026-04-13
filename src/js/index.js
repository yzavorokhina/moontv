import _ from 'lodash';
import '../scss/main.scss';
import '../scss/home.scss';
import '../scss/components/_banner.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import HomePage from './components/HomePage';
import App from './components/App';

const body = document.getElementById('react-body');
const rootBody = createRoot(body);
rootBody.render(<HomePage db={db} />);
// rootBody.render(<App db={db} />);
