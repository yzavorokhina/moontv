import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/notFound.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import App from './components/App';

const body = document.getElementById('react-body');
const rootBody = createRoot(body);
rootBody.render(<App db={db} route={"NotFoundPage"} />);