import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/channel.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import ChannelPage from './components/ChannelPage.js';

const body = document.getElementById('react-body');
const rootBody = createRoot(body);
rootBody.render(<ChannelPage db={db} showAll={false} />);
