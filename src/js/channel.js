import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
// import '../scss/index.scss';
import '../scss/channel.scss';
import './components/chat';
import { createRoot } from 'react-dom/client';
import * as streams from '../db/streams.json';
import * as channels from '../db/channels.json';
import VerticalMenu from './components/VerticalMenu';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Channel page loaded with its styles');
});


function getUrlParams() {
  const search = window.location.search;
  if (!search) return {};

  const params = new URLSearchParams(search);
  const obj = {};

  for (let [key, value] of params) {
    obj[key] = value;
  }

  return obj;
}

// Использование
const params = getUrlParams();
console.log(params.id); // '1'

const streamId = +params.id || 1;
const streamData = streams.find(stream => stream.id === streamId);
const channelData = channels.find(channel => channel.id === streamData.channelId);

console.log({ params, streamData, channelData });

const verticalMenu = document.getElementById('vertical-menu');
const streamTV = document.getElementById("streamTV");
const streamTitle = document.getElementById("streamTitle");
const streamDes = document.getElementById("streamDes");
const channelName = document.getElementById("channelName");
const currentViewers = document.getElementById("current-viewers");
const ageRating = document.getElementById("ageRating");
const channelIcon = document.getElementById("channelIcon");

const rootVerticalMenu = createRoot(verticalMenu);
rootVerticalMenu.render(<VerticalMenu showAll={false} />);

streamTV.src = streamData.videoUrl;
streamTitle.textContent  = streamData.title;
streamDes.textContent = streamData.description;
channelName.textContent = channelData.name;
currentViewers.textContent = streamData.audience;
ageRating.textContent = streamData.ageRate + "+";
channelIcon.src = channelData.iconUrl;