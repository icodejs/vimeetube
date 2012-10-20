
var Vimeetube = (function (window, document, $, undefined) {
  'use strict';

  var
  alert     = window.alert,
  console   = window.console,
  _elements = null,
  videoType = '';


  function init() {
    console.log('init');

  }


  function getElements() {
    if (_elements) {
      return _elements;
    }
    else {
      _elements = {
        document : $(document),
        loadBtn  : $('.load'),
        url      : $('.url'),
        window   : $(window)
      };
      return _elements;
    }
  }


  function load(url) {
    // this will determine what player to instantiate
    if (url && url.length) {
      switch(determineVideoType(url)) {
        case 'youtube':
          // execute code block
          break;
        case 'vimeo':
          // execute code block
          break;
        default:
          //code to be executed default
      }
    }
    else {
      alert('Please enter a url or a video id.');
    }
  }


  function reset() {
    // set the page back to original state
    _elements = null;
  }


  function determineVideoType(input) {
    var type = '';

    // id not url
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
    return { id : getIdFromUrl(input), typeName : type };
  }


  function getIdFromUrl(url) {
    return '';
  }


  return {
    getElements : getElements,
    init        : init,
    load        : load,
    videoType   : videoType
  };

} (window, document, jQuery));
