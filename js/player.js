
function Player() {
  this.loaded = false;
  this.player = null;
  this.state  = -1;
  return this;
}


Player.prototype.getId = function (url) {
  throw Error(errorMessage('getId'));
};


Player.prototype.toggle = function (url) {
  throw Error(errorMessage('toggle'));
};


Player.prototype.load = function () {
  throw Error(errorMessage('load'));
};


Player.prototype.init = function (videoId, videoContainerId, $) {
  this.id               = videoId;
  this.$                = $;
  this.videoContainerId = videoContainerId;
  return this;
};


Player.prototype.loaded = function () {
  throw Error(errorMessage('loaded'));
};


Player.prototype.toggle = function () {
  throw Error(errorMessage('toggle'));
};


Player.prototype.play = function () {
  throw Error(errorMessage('play'));
};


Player.prototype.pause = function () {
  throw Error(errorMessage('pause'));
};


Player.prototype.stop = function () {
  throw Error(errorMessage('stop'));
};


Player.prototype.seekTo = function () {
  throw Error(errorMessage('seekTo'));
};


Player.prototype.unLoad = function () {
  throw Error(errorMessage('unLoad'));
};


Player.prototype.destroy = function () {
  throw Error(errorMessage('destroy'));
};


Player.prototype.getCurrentTime = function () {
  throw Error(errorMessage('getCurrentTime'));
};


Player.prototype.getDuration = function () {
  throw Error(errorMessage('getDuration'));
};


Player.prototype.getVideoEmbedCode = function () {
  throw Error(errorMessage('getVideoEmbedCode'));
};


Player.prototype.getVideoUrl = function () {
  throw Error(errorMessage('getVideoUrl'));
};


Player.prototype.getPlayerState = function () {
  throw Error(errorMessage('getPlayerState'));
};


function errorMessage(prefix) {
  return prefix + ' not implemented yet.';
}
