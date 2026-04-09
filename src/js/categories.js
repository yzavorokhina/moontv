import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/categories.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import CategoriesPage from './components/CategoriesPage';

const body = document.getElementById('react-body');
const rootBody = createRoot(body);
rootBody.render(<CategoriesPage db={db} />);