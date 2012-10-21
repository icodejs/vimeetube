
function Youtube() {
}

Youtube.prototype = new Player();

Youtube.prototype.constructor = Youtube;

Youtube.prototype.load = function(callback) {
  var self = this;
  this.player = new window.YT.Player(self.videoContainerId, {
    height  : '390',
    width   : '640',
    videoId : self.id,
    events  : {
      onStateChange : function (event) {
        self.state = event.data;
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


Youtube.prototype.play = function () {
  if (this.player && this.player.playVideo) {
    this.player.playVideo();
  }
};


Youtube.prototype.stop = function () {
  if (this.player && this.player.stopVideo) {
    this.player.stopVideo();
  }
};


Youtube.prototype.pause = function () {
  if (this.player && this.player.pauseVideo) {
    this.player.pauseVideo();
  }
};


Youtube.prototype.seekTo = function (seekVal) {
  if (this.player && this.player.seekTo) {
    this.player.seekTo(seekVal, true);
  }
};


Youtube.prototype.toggle = function () {
  if (this.state === 1) {
    this.pause();
  } else {
    this.play();
  }
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
