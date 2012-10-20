
$(function () {
  var $video, $els;

  Vimeetube.init();

  $video    = $('#video');
  $elements = Vimeetube.getElements();

  $elements.loadBtn.on('click', function (e) {
    e.preventDefault();
    Vimeetube.load($elements.url.val());
  });


});
