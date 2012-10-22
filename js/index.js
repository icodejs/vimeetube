
/**
 * Provide a common API for controlling Youtube and Vimeo embedded video players via JavaScript.
 * https://github.com/icodejs/vimeetube
 *
 * @version 1.0
 * @copyright Copyright (C) 2012 Jay Esco. All rights reserved.
 * @license MIT License
 */


(function ($, Vimeetube) {
  // At some point, swap out jQuery for vanilla JS.

  var $elements;

  $(function () {
    'use strict';

    $elements = getElements();


    $elements.loadBtn.on('click', function (e) {
      e.preventDefault();

      var url = $.trim($elements.url.val());

      if (Vimeetube.player) {
        Vimeetube.reset(function () {
          Vimeetube.init(url);
        });
      }
      else {
        Vimeetube.init(url);
      }
      $elements.buttonConatiner.fadeIn();
    });


    $elements.stopBtn.on('click', function (e) {
      e.preventDefault();
      Vimeetube.player.stop();
    });


    $elements.playBtn.on('click', function (e) {
      e.preventDefault();
      Vimeetube.player.play();
    });


    $elements.pauseBtn.on('click', function (e) {
      e.preventDefault();
      Vimeetube.player.pause();
    });


    $elements.gotoBtn.on('click', function (e) {
      e.preventDefault();
      var gotoVal = $elements.gotoValue.val();

      if (gotoVal.length && !isNaN(gotoVal)) {
        Vimeetube.player.seekTo(gotoVal);
      }
    });


    $elements.toggleBtn.on('click', function (e) {
      e.preventDefault();
      Vimeetube.player.toggle();
    });


    $elements.currentTimeBtn.on('click', function (e) {
      e.preventDefault();
      Vimeetube.player.getCurrentTime(function (value) {
        debug(value);
      });
    });


    $elements.durationBtn.on('click', function (e) {
      e.preventDefault();
      Vimeetube.player.getDuration(function (value) {
        debug(value);
      });
    });


    $elements.embedCodeBtn.on('click', function (e) {
      e.preventDefault();
      Vimeetube.player.getVideoEmbedCode(function (value) {
        debug(value);
      });
    });


    $elements.videoUrlBtn.on('click', function (e) {
      e.preventDefault();
      Vimeetube.player.getVideoUrl(function (value) {
        debug(value);
      });
    });


    $elements.stateBtn.on('click', function (e) {
      e.preventDefault();
      debug(Vimeetube.player.getPlayerState());
    });


    function debug(value) {
      var output = value + '\n' + '=============' + '\n' + $elements.debug.val();
      $elements.debug.val(output);
    }


    function getElements() {
      return {
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
        playBtn         : $('.play'),
        stateBtn        : $('.state'),
        stopBtn         : $('.stop'),
        toggleBtn       : $('.toggle'),
        url             : $('.url'),
        video           : $('#video'),
        videoUrlBtn     : $('.videoUrl'),
        window          : $(window)
      };
    }

  }); // end jQuery

} (jQuery, Vimeetube));
