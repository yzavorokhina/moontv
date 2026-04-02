import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/channel.scss';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import { getUrlParams } from '../js/utils/common.js';
import Header from './components/Header';
import VerticalMenu from './components/VerticalMenu';
import Stream from './components/Stream.js';


document.addEventListener('DOMContentLoaded', () => {
  console.log('Channel page loaded with its styles');
});

// Использование
const params = getUrlParams();
console.log(params.id); // '1'

const streamId = +params.id || 1;
const streamData = db.streamsModel.findOneById(streamId);
const channelData = db.channelsModel.findOneById(streamData.channelId);

console.log({ params, streamData, channelData });


const header = document.getElementById('react-header');
const rootHeader = createRoot(header);
rootHeader.render(<Header />);

const verticalMenu = document.getElementById('vertical-menu');
const rootVerticalMenu = createRoot(verticalMenu);
rootVerticalMenu.render(<VerticalMenu db={db} showAll={false} />);

const stream = document.getElementById('react-stream');
const rootStream = createRoot(stream);
rootStream.render(<Stream streamData={streamData} channelData={channelData} />);