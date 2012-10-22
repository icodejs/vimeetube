
/**
 * Swap out any jq for vanilla js, get el by id / query selector all etc
 *
 * create a player state object that both player have access to that prefines
 * all the states with names and numbers
 *
 */

(function ($, Vimeetube) {
  var $elements;

  $(function () {
    'use strict';

    $elements = Vimeetube.getElements();


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
    }); // end load button click


    $elements.stopBtn.on('click', function (e) {
      e.preventDefault();
      Vimeetube.player.stop();
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


  }); // end jQuery

} (jQuery, Vimeetube));
