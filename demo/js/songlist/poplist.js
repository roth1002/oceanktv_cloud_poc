import fakeData from '../../../data.json';
import '../../sass/songlist.sass';
import { postSongToQueueUrl } from '../config/url';
import toast from '../utils/toast';

/* DOM */
const $popListBlock = $('#pop-list');

$(document).ready(init);

function init() {
	console.log('%c Init: songlist ','background-color:teal;color:white;');

	renderFetchedPopList();
	window.playYoutube = playYoutube;
}

function renderFetchedPopList() {
	const popSongs = fetchPopList();
	$popListBlock.append(popSongs);
}

function fetchPopList() {
	return popSongsTemplate(fakeData.items);
}

function popSongsTemplate(list) {
	const stringArray = list.map(template);
	const domString = stringArray.reduce((a,b) => a + b);
	return domString;
}

function template(song) {
  return (
    `<div class="song-block">
      <img class="song-img" src="${song.thumbnails.medium.url}"/>
      <p class="song-title">${song.title}</p>
      <div class="song-mask">
				<i class="song-play-icon ic_controlbar_play"
					id="${song.id}"
					name="${song.title}"
					onclick="playYoutube(this)"></i>
      </div>
    </div>`
  );
}

function playYoutube(elmnt) {
	$.post(postSongToQueueUrl, { songid: elmnt.id, flow: 0 })
		.done(() => { toast(elmnt.getAttribute('name')) });
}