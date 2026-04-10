import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/channel.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import { getUrlParams } from '../js/utils/common.js';
import Header from './components/Header';
import VerticalMenu from './components/VerticalMenu';
import Stream from './components/Stream.js';
import ChannelPage from './components/ChannelPage.js';


document.addEventListener('DOMContentLoaded', () => {
  console.log('Channel page loaded with its styles');
});

// Использование
const params = getUrlParams();
console.log(params.id); // '1'

const streamId = +params.id || 1;

const body = document.getElementById('react-body');
const rootBody = createRoot(body);
rootBody.render(<ChannelPage db={db} streamId={streamId} showAll={true} />);
