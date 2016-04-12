import {
	stopUrl,
	playUrl,
	nextUrl,
	replayUrl,
	guideUrl,
	muteUrl,
	booUrl,
	applauseUrl,
	echosUrl,
	echomUrl,
	echolUrl,
	pitchUpUrl,
	pitchDownUrl,
	micUpUrl,
	micDownUrl,
	musicUpUrl,
	musicDownUrl
} from '../config/url';

/* DOM */
const $stop = $('#ctl_songlist_stop');
const $play = $('#ctl_songlist_play');
const $next = $('#ctl_songlist_next');
const $replay = $('#ctl_songlist_replay');
const $guide = $('#ctl_songlist_guide');
const $mute = $('#ctl_songlist_mute');
const $boo = $('#ctl_songlist_boo');
const $applause = $('#ctl_songlist_applause');
const $echol = $('#ctl_songlist_echo_long');
const $echom = $('#ctl_songlist_echo_middle');
const $echos = $('#ctl_songlist_echo_small');
const $pitchUp = $('#ctl_songlist_pitch_up');
const $pitchDown = $('#ctl_songlist_pitch_down');
const $micUp = $('#ctl_songlist_mic_up');
const $micDown = $('#ctl_songlist_mic_down');
const $musicUp = $('#ctl_songlist_music_up');
const $musicDown = $('#ctl_songlist_music_down');

initialize();

function initialize() {
	bindActionToStop();
	bindActionToPlay();
	bindActionToNext();
	bindActionToReplay();
	bindActionToGuide();
	bindActionToMute();
	bindActionToBoo();
	bindActionToApplause();
	bindActionToEchoS();
	bindActionToEchoM();
	bindActionToEchoL();
	bindActionToPitchUp();
	bindActionToPitchDown();
	bindActionToMicUp();
	bindActionToMicDown();
	bindActionToMusicUp();
	bindActionToMusicDown();
}

function bindActionToStop() {
	$stop.on('click', stop);
}

function stop() {
	$.ajax({
		url: stopUrl,
		method: 'POST'
	})
}

function bindActionToPlay() {
	$play.on('click', play);
}

function play() {
	$.ajax({
		url: playUrl,
		method: 'POST'
	})
}

function bindActionToNext() {
	$next.on('click', next);
}

function next() {
	$.ajax({
		url: nextUrl,
		method: 'POST'
	})
}

function bindActionToReplay() {
	$replay.on('click', replay);
}

function replay() {
	$.ajax({
		url: replayUrl,
		method: 'POST'
	})
}

function bindActionToGuide() {
	$guide.on('click', guide);
}

function guide() {
	$.ajax({
		url: guideUrl,
		method: 'POST'
	})
}

function bindActionToMute() {
	$mute.on('click', mute);
}

function mute() {
	$.ajax({
		url: muteUrl,
		method: 'POST'
	})
}

function bindActionToBoo() {
	$boo.on('click', boo);
}

function boo() {
	$.ajax({
		url: booUrl,
		method: 'POST'
	})
}

function bindActionToApplause() {
	$applause.on('click', applause);
}

function applause() {
	$.ajax({
		url: applauseUrl,
		method: 'POST'
	})
}

function bindActionToEchoS() {
	$echos.on('click', echos);
}

function echos() {
	$.ajax({
		url: echosUrl,
		method: 'POST'
	})
}

function bindActionToEchoM() {
	$echom.on('click', echom);
}

function echom() {
	$.ajax({
		url: echomUrl,
		method: 'POST'
	})
}

function bindActionToEchoL() {
	$echol.on('click', echol);
}

function echol() {
	$.ajax({
		url: echolUrl,
		method: 'POST'
	})
}

function bindActionToPitchUp() {
	$pitchUp.on('click', pitchUp);
}

function pitchUp() {
	$.ajax({
		url: pitchUpUrl,
		method: 'POST'
	})
}

function bindActionToPitchDown() {
	$pitchDown.on('click', pitchDown);
}

function pitchDown() {
	$.ajax({
		url: pitchDownUrl,
		method: 'POST'
	})
}

function bindActionToMicUp() {
	$micUp.on('click', micUp);
}

function micUp() {
	$.ajax({
		url: micUpUrl,
		method: 'POST'
	})
}

function bindActionToMicDown() {
	$micDown.on('click', micDown);
}

function micDown() {
	$.ajax({
		url: micDownUrl,
		method: 'POST'
	})
}

function bindActionToMusicUp() {
	$musicUp.on('click', musicUp);
}

function musicUp() {
	$.ajax({
		url: musicUpUrl,
		method: 'POST'
	})
}

function bindActionToMusicDown() {
	$musicDown.on('click', musicDown);
}

function musicDown() {
	$.ajax({
		url: musicDownUrl,
		method: 'POST'
	})
}