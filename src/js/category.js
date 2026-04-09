import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/category.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper.js';
import { getUrlParams } from '../js/utils/common.js';
import CategoryPage from './components/CategoryPage.js';

const params = getUrlParams();
console.log(params.id); // '1'

const categoryId = +params.id || 1;

const body = document.getElementById('react-body');
const rootBody = createRoot(body);
rootBody.render(<CategoryPage db={db} categoryId={categoryId} showAll={true} />);
