import _ from 'lodash';
import '../scss/home.scss';
import '../scss/search.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import App from './components/App.js';

const body = document.getElementById('react-body');
const rootBody = createRoot(body);
rootBody.render(<App db={db} showAll={true} route={"SearchPage"} />);