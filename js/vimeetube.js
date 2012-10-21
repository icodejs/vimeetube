
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
    Vimeetube.videoType = videoType = getVideoType(url);

    if (!videoType.id.length) {
      videoType.id = getIdFromUrl(videoType.typeName, url);
    }

    if (videoType.typeName === 'youtube') {
      Vimeetube.player = player = new Youtube().init(videoType.id, 'video', $, window);
    }
    else if (videoType.typeName === 'vimeo') {
      Vimeetube.player = player = new Vimeo().init(videoType.id, 'video', $, window);
    }

    load();
  }


  function getVideoType(input) {
    var type = '';

    if (input.indexOf('/') === -1 && input.indexOf('?') === -1 && input.indexOf('=') === -1 && input.indexOf('http') === -1 && input.indexOf('https') === -1) {
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
  }


  function reset(callback) {
    // set the page back to original state
    Vimeetube.videoType = videoType = '';
    Vimeetube.player = player = null;
    $('iframe').remove();
    _elements.video = $('<div id="video" />').appendTo('body');
    callback();
  }


  function getIdFromUrl(type, url) {
    var o;

    if (type === 'youtube') {
      o = getURIObject(url);

      if (o.host() === 'youtu.be') {
        return o.path().replace('/', '');
      }
      if (o.path() === '/watch') {
        return o.search(true)['v'];
      }
      if (o.directory() === '/embed') {
        return o.path().split('/')[2];
      }
    }
    else if (type === 'vimeo') {
      o = getURIObject(url);

      if (o.host() === 'vimeo.com') {
        return o.path().replace('/', '');
      }
      if (o.host() === 'player.vimeo.com') {
        return o.path().split('/')[2];
      }
    }
  }


  function getURIObject(url) {
    var parsedUri = URI.parse(url), valideUrl;

    if (parsedUri.hostname && parsedUri.path) {
      if (url.indexOf('http://') === -1 && url.indexOf('https://') === -1)
        valideUrl = 'http://' + url;
      valideUrl = url;
    }
    else {
      throw new Error('Unrecognised Youtube or Vimeo URL structure: ' + url);
    }
      return new URI(valideUrl);
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
