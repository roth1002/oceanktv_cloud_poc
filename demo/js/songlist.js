import fakeData from '../../data.json';
import '../sass/songlist.sass';

$(document).ready(init);

function init() {
	console.log('%c Init: songlist','color:tomato;font-weight:bold;');

	// DOM Elements
	const $popListBlock = $('#pop-list');

	const popSongs = fetchPopList();
	$popListBlock.append(popSongs)
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
    `<div class="song-block" id="${song.video_id}">
      <img class="song-img" src="${song.thumbnails.medium.url}"/>
      <p class="song-title">${song.title}</p>
      <div class="song-mask">
      	<i class="song-play-icon ic_controlbar_play"></i>
      </div>
    </div>`
  );
};