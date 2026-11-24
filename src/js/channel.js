import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/channel.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import App from './components/App.js';

const body = document.getElementById('react-body');
const rootBody = createRoot(body);
rootBody.render(<App db={db} showAll={false} route={"ChannelPage"} />);
