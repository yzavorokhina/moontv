import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/notFound.scss';
import { createRoot } from 'react-dom/client';
import NotFoundPage from './components/NotFoundPage';

const body = document.getElementById('react-body');
const rootBody = createRoot(body);
rootBody.render(<NotFoundPage  />);