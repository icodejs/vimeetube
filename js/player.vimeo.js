
function Vimeo() {
}

Vimeo.prototype = new Player();

Vimeo.prototype.constructor = Vimeo;

Vimeo.prototype.load = function(callback) {
  var
  $      = this.$,
  $vimeo = this.$vimeo,
  url    = [],
  $iframe;

  url.push('http://player.vimeo.com/video/' + this.id);
  url.push('?api=1&player_id=' + this.videoContainerId);
  url.push('&portrait=false&title=false&byline=false');

  $iframe = $('<iframe />')
    .attr({
      id          : this.videoContainerId,
      src         : url.join(''),
      width       : this.dims.width,
      height      : this.dims.height,
      frameborder : 0
    });

  $('.videoContainer').html($iframe);

  this.player = $vimeo($iframe[0]);
  this.player.addEvent('ready', function (player_id) {
    callback();
  });
};


Vimeo.prototype.getId = function (url) {
  var videoType = this.getVideoType(url), uri;

  if (videoType.id.length) {
    return videoType.id;
  }

  uri = this.getURIObject(url);

  if (uri.host() === 'vimeo.com') {
    return uri.path().replace('/', '');
  }
  if (uri.host() === 'player.vimeo.com') {
    return uri.path().split('/')[2];
  }
};


Vimeo.prototype.play = function () {
  this.player.api('play');
  this.state = this.states.play;
};


Vimeo.prototype.stop = function () {
  this.player.api('unload');
  this.state = this.states.stop;
};


Vimeo.prototype.pause = function () {
  this.player.api('pause');
  this.state = this.states.pause;
};


Vimeo.prototype.seekTo = function (seekVal) {
  this.player.api('seekTo', seekVal);
};


Vimeo.prototype.toggle = function () {
  if (this.state === this.states.play)
    this.pause();
  else
    this.play();
};


Vimeo.prototype.getCurrentTime = function (callback) {
  this.player.api('getCurrentTime', function(value, player_id) {
    if (callback) callback(value);
  });
};


Vimeo.prototype.getDuration = function (callback) {
  this.player.api('getDuration', function(value, player_id) {
    if (callback) callback(value);
  });
};


Vimeo.prototype.getVideoEmbedCode = function (callback) {
  this.player.api('getVideoEmbedCode', function(value, player_id) {
    if (callback) callback(value);
  });
};


Vimeo.prototype.getVideoUrl = function (callback) {
  this.player.api('getVideoUrl', function(value, player_id) {
    if (callback) callback(value);
  });
};


Vimeo.prototype.getPlayerState = function () {
  return this.state;
};
