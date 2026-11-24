import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/auth.scss';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const body = document.getElementById('react-body');
const rootBody = createRoot(body);
rootBody.render(<App route={"AuthPage"}  />);