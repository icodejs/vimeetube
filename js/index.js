
/**
 * Swap out any jq for vanilla js, get el by id / query selector all etc
 *
 * create a player state object that both player have access to that prefines
 * all the states with names and numbers
 *
 *  move getIdFromUrl() method into each players constructor.
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

      if (!isNaN(gotoVal)) {
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
        var output = $elements.debug.val() + '\n' + value;
        $elements.debug.val(output);
      });
    });


    $elements.durationBtn.on('click', function (e) {
      e.preventDefault();
      Vimeetube.player.getDuration(function (value) {
        var output = $elements.debug.val() + '\n' + value;
        $elements.debug.val(output);
      });
    });


    $elements.embedCodeBtn.on('click', function (e) {
      e.preventDefault();
      Vimeetube.player.getVideoEmbedCode(function (value) {
        var output = $elements.debug.val() + '\n' + value;
        $elements.debug.val(output);
      });
    });


    $elements.videoUrlBtn.on('click', function (e) {
      e.preventDefault();
      Vimeetube.player.getVideoUrl(function (value) {
        var output = $elements.debug.val() + '\n' + value;
        $elements.debug.val(output);
      });
    });


    $elements.stateBtn.on('click', function (e) {
      e.preventDefault();
      var output = $elements.debug.val() + '\n' + Vimeetube.player.getPlayerState();
      $elements.debug.val(output);
    });

  }); // end jQuery

} (jQuery, Vimeetube));
