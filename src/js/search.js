import _ from 'lodash';
import '../scss/home.scss';
import '../scss/search.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import { getUrlParams } from '../js/utils/common.js';
import SearchPage from './components/SearchPage.js';

const params = getUrlParams();
console.log({ params }); // '1'

const search = params.q || "";

const body = document.getElementById('react-body');
const rootBody = createRoot(body);
rootBody.render(<SearchPage db={db} search={search} showAll={true} />);