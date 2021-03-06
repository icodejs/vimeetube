
function Youtube() {
}

Youtube.prototype = new Player();

Youtube.prototype.constructor = Youtube;

Youtube.prototype.load = function(callback) {
  var self = this;

  self.player = new self.YT.Player(self.videoContainerId, {
    videoId : self.id,
    width   : self.dims.width,
    height  : self.dims.height,
    events  : {
      onStateChange : function (event) {
        self.setPlayerState(event.data);
      },
      onError : function (error) {
        callback(error);
      },
      onReady : function (event) {
        self.loaded = true;
        callback(null);
      }
    }
  });
};


Youtube.prototype.getId = function (url) {
  var videoType = this.getVideoType(url), uri;

  if (videoType.id.length) {
    return videoType.id;
  }

  uri = this.getURIObject(url);

  if (uri.host() === 'youtu.be') {
    return uri.path().replace('/', '');
  }
  if (uri.path() === '/watch') {
    return uri.search(true)['v'];
  }
  if (uri.directory() === '/embed') {
    return uri.path().split('/')[2];
  }
};


Youtube.prototype.play = function () {
  if (this.player && this.player.playVideo)
    this.player.playVideo();
};


Youtube.prototype.stop = function () {
  if (this.player && this.player.stopVideo)
    this.player.stopVideo();
};


Youtube.prototype.pause = function () {
  if (this.player && this.player.pauseVideo)
    this.player.pauseVideo();
};


Youtube.prototype.seekTo = function (seekVal) {
  if (this.player && this.player.seekTo)
    this.player.seekTo(seekVal, true);
};


Youtube.prototype.toggle = function () {
  if (this.state === 1)
    this.pause();
  else
    this.play();
};


Youtube.prototype.getCurrentTime = function (callback) {
  var value = this.player.getCurrentTime ? this.player.getCurrentTime() : 0;
  if (callback)
    return callback(value);
  else
    return value;
};


Youtube.prototype.getDuration = function (callback) {
  var value = this.player.getDuration ? this.player.getDuration() : 0;
  if (callback)
    return callback(value);
  else
    return value;
};


Youtube.prototype.getVideoEmbedCode = function (callback) {
  var value = this.player.getVideoEmbedCode ? this.player.getVideoEmbedCode() : 0;
  if (callback)
    return callback(value);
  else
    return value;
};


Youtube.prototype.getVideoUrl = function (callback) {
  var value = this.player.getVideoUrl ? this.player.getVideoUrl() : 0;
  if (callback)
    return callback(value);
  else
    return value;
};


Youtube.prototype.getPlayerState = function () {
  return this.state;
};


Youtube.prototype.setPlayerState = function (value) {
  for (var key in this.states) {
     if (this.states.hasOwnProperty(key)) {
       var state = this.states[key];
       if (state === value) {
         this.state = state;
       }
     }
  }
};
