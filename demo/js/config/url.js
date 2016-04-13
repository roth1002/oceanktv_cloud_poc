'use strict';

/**
 * url.js
 *
 * @author  roth Yu-Jhau Peng
 *
 */

exports = module.exports = {};

var hostname      = exports.hostname = window.location.hostname === 'localhost' ? '192.168.0.220' : window.location.hostname;

var port          = exports.port = 5603;

var protocol      = exports.protocol = 'http';

var portDisplay   = (port === 80) ? '' : ':' + port;

var base          = exports.baseUrl = `${protocol}://${hostname}${portDisplay}`;

var projectName	  = exports.projectName = 'ktvstation';

var version		  = exports.version = 'v1';

// Footer bar controlor
exports.stopUrl = `${base}/${projectName}/${version}/player/stop`;
exports.playUrl = `${base}/${projectName}/${version}/player/play`;
exports.nextUrl = `${base}/${projectName}/${version}/player/next`;
exports.replayUrl = `${base}/${projectName}/${version}/player/replay`;
exports.guideUrl = `${base}/${projectName}/${version}/player/guide`;
exports.muteUrl = `${base}/${projectName}/${version}/player/mute`;
exports.booUrl = `${base}/${projectName}/${version}/effects/sfx/boo`;
exports.applauseUrl = `${base}/${projectName}/${version}/effects/sfx/applause`;
exports.echolUrl = `${base}/${projectName}/${version}/effects/mic/echo/long`;
exports.echomUrl = `${base}/${projectName}/${version}/effects/mic/echo/middle`;
exports.echosUrl = `${base}/${projectName}/${version}/effects/mic/echo/short`;
exports.pitchUpUrl = `${base}/${projectName}/${version}/effects/pitch/up`;
exports.pitchDownUrl = `${base}/${projectName}/${version}/effects/pitch/down`;
exports.micUpUrl = `${base}/${projectName}/${version}/effects/mic/volume/up`;
exports.micDownUrl = `${base}/${projectName}/${version}/effects/mic/volume/down`;
exports.musicUpUrl = `${base}/${projectName}/${version}/player/volume/up`;
exports.musicDownUrl = `${base}/${projectName}/${version}/player/volume/down`;

// Poplist
exports.postSongToQueueUrl = `${base}/${projectName}/${version}/playlist`;
