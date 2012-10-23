
var Vimeetube = (function (window, document, $, Player, Youtube, Vimeo, undefined) {
  'use strict';

  var videoType = '', player = null;


  function load() {
    if (player) {
      player.load(function (err) {
        if (err)
          throw err;
        player.play();
      });
    }
  }


  function init(url) {
    Vimeetube.videoType = videoType = new Player().getVideoType(url);

    if (videoType.typeName === 'youtube') {
      Vimeetube.player = player = new Youtube().init(url, 'video', window);
    }
    else if (videoType.typeName === 'vimeo') {
      Vimeetube.player = player = new Vimeo().init(url, 'video', window);
    }

    load();
  }


  function reset(callback) {
    Vimeetube.videoType = videoType = '';
    Vimeetube.player = player = null;
    $('iframe').remove();
    $('<div id="video" />').appendTo('.videoContainer');
    callback();
  }


  // public api
  return {
    init        : init,
    player      : player,
    reset       : reset,
    videoType   : videoType
  };

} (window, document, jQuery, Player, Youtube, Vimeo));
