
function Player() {
  this.loaded  = false;
  this.player  = null;
  this.states  = {
    init  : -1,
    stop  : 0,
    play  : 1,
    pause : 2
  };
  this.state = this.states.init;
  return this;
}


Player.prototype.getVideoType = function (input) {
  var type = '';

  if (input.indexOf('/') === -1 &&
      input.indexOf('?') === -1 &&
      input.indexOf('=') === -1 &&
      input.indexOf('http') === -1 &&
      input.indexOf('https') === -1) {

    if (isNaN(input)) {
      type = 'youtube';
    }
    else {
      type = 'vimeo';
    }
    return { id : input, typeName : type };
  }

  if (input.indexOf('youtu') >= 0) {
    type = 'youtube';
  }
  else if (input.indexOf('vimeo') >= 0) {
    type = 'vimeo';
  }
  else {
    throw {
      error: 'Unrecognised URL',
      message: 'Did not recognise this URL. Only Youtbe and Vimeo are supported'
    };
  }
  return { id : '', typeName : type };
};


Player.prototype.getURIObject = function (url) {
  var URI = this.URI, parsedUri = URI.parse(url), validUrl;

  if (parsedUri.hostname && parsedUri.path) {
    if (url.indexOf('http://') === -1 && url.indexOf('https://') === -1)
      validUrl = 'http://' + url;
    validUrl = url;
  }
  else {
    throw new Error('Unrecognised Youtube or Vimeo URL structure: ' + url);
  }

  return new URI(validUrl);
};


Player.prototype.init = function (url, videoContainerId, _window) {
  this.$                = _window.jQuery;
  this.$vim             = _window.$f;
  this.YT               = _window.YT;
  this.URI              = _window.URI;
  this.id               = this.getId(url);
  this.videoContainerId = videoContainerId;
  return this;
};


Player.prototype.getId = function (url) {
  throw Error(errorMessage('getId'));
};


Player.prototype.toggle = function (url) {
  throw Error(errorMessage('toggle'));
};


Player.prototype.load = function () {
  throw Error(errorMessage('load'));
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
