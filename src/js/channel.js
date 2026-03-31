import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/channel.scss';
import './components/chat';
import { createRoot } from 'react-dom/client';
import db from '../db/dbHelper';
import SearchForm from './components/SearchForm';
import VerticalMenu from './components/VerticalMenu';
import { getUrlParams } from '../utils/common.js';

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

const searchFormBlock = document.getElementById('search-form-block');
const verticalMenu = document.getElementById('vertical-menu');
const streamTV = document.getElementById("streamTV");
const streamTitle = document.getElementById("streamTitle");
const streamDes = document.getElementById("streamDes");
const channelName = document.getElementById("channelName");
const currentViewers = document.getElementById("current-viewers");
const ageRating = document.getElementById("ageRating");
const channelIcon = document.getElementById("channelIcon");

const rootSearchFormBlock = createRoot(searchFormBlock);
rootSearchFormBlock.render(<SearchForm />);

const rootVerticalMenu = createRoot(verticalMenu);
rootVerticalMenu.render(<VerticalMenu db={db} showAll={false} />);

streamTV.src = streamData.videoUrl;
streamTitle.textContent = streamData.title;
streamDes.textContent = streamData.description;
channelName.textContent = channelData.name;
currentViewers.textContent = streamData.audience;
ageRating.textContent = streamData.ageRate + "+";
channelIcon.src = channelData.iconUrl;