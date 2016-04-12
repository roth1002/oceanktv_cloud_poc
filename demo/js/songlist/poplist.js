import fakeData from '../../../data.json';
import '../../sass/songlist.sass';

let $popListBlock;

$(document).ready(init);

function init() {
	console.log('%c Init: songlist ','background-color:teal;color:white;');

	// DOM Elements
	$popListBlock = $('#pop-list');

	// Functions
	window.playYoutube = playYoutube;


	renderFetchedPopList();
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
				<i class="song-play-icon ic_controlbar_play" id="${song.id}" onclick="playYoutube(this)"></i>
      </div>
    </div>`
  );
}

function playYoutube(elmnt) {
	const id = elmnt.id;
	console.log(`%c id : ${id} `,'color:#f69;font-weight:bold;')
	// TODO: ajax
}