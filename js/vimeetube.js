
var Vimeetube = (function (window, document, $, Player, Youtube, Vimeo, undefined) {
  'use strict';

  var
  alert     = window.alert,
  console   = window.console,
  _elements = null,
  videoType = '',
  player    = null,
  URI       = window.URI;


  function getElements() {
    if (_elements) {
      return _elements;
    }
    else {
      _elements = {
        buttonConatiner : $('.buttonConatiner'),
        debug           : $('.debug'),
        currentTimeBtn  : $('.currentTime'),
        document        : $(document),
        durationBtn     : $('.duration'),
        embedCodeBtn    : $('.embedCode'),
        gotoBtn         : $('.goto'),
        gotoValue       : $('.gotoValue'),
        loadBtn         : $('.load'),
        pauseBtn        : $('.pause'),
        stateBtn        : $('.state'),
        stopBtn         : $('.stop'),
        toggleBtn       : $('.toggle'),
        url             : $('.url'),
        video           : $('#video'),
        videoUrlBtn     : $('.videoUrl'),
        window          : $(window)
      };
      return _elements;
    }
  }


  function load() {
    player.load(function (err) {
      if (err) {
        throw err;
      }
      player.play();
    });
  }


  function init(url) {
    Vimeetube.videoType = videoType = new Player().getVideoType(url);

    if (videoType.typeName === 'youtube') {
      Vimeetube.player = player = new Youtube().init(url, 'video', $, window);
    }
    else if (videoType.typeName === 'vimeo') {
      Vimeetube.player = player = new Vimeo().init(url, 'video', $, window);
    }

    load();
  }


  function reset(callback) {
    // set the page back to original state
    Vimeetube.videoType = videoType = '';
    Vimeetube.player = player = null;
    $('iframe').remove();
    _elements.video = $('<div id="video" />').appendTo('body');
    callback();
  }


  return {
    getElements : getElements,
    init        : init,
    load        : load,
    player      : player,
    reset       : reset,
    videoType   : videoType
  };

} (window, document, jQuery, Player, Youtube, Vimeo));
