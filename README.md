Vimeetube
=========

Provide a common API for controlling Youtube and Vimeo embedded video players via JavaScript.

## Supported functionality

- Load
- Play
- Stop
- Pause
- Toggle
- Seek to
- Get video current time
- Get video duration
- Get video embed code
- Get video URL
- Get player state

## Usage

```javascript

// initialise Vimeetube
Vimeetube.init('your url or id');

// example api usage
$('.stopBtn').on('click', function (e) {
  e.preventDefault();
  Vimeetube.player.stop();
});

$('.pauseBtn').on('click', function (e) {
  e.preventDefault();
  Vimeetube.player.pause();
});

$('.gotoBtn').on('click', function (e) {
  e.preventDefault();
  Vimeetube.player.goto(23); // 23 seconds into video
});

$('.toggleBtn').on('click', function (e) {
  e.preventDefault();
  Vimeetube.player.toggle(); // toggle play / pause
});

$('.timeBtn').on('click', function (e) {
  e.preventDefault();
  Vimeetube.player.getCurrentTime(function (value) {
    alert(value); // current time in seconds
  });
});

$('.durationBtn').on('click', function (e) {
  e.preventDefault();
  Vimeetube.player.getDuration(function (value) {
    alert(value); // duration in seconds
  });
});

$('.embedBtn').on('click', function (e) {
  e.preventDefault();
  Vimeetube.player.getVideoEmbedCode(function (value) {
    alert(value); // html string embed code
  });
});

$('.videoUrlBtn').on('click', function (e) {
  e.preventDefault();
  Vimeetube.player.getVideoUrl(function (value) {
    alert(value); // string url to video on Youtube or Vimeo
  });
});

$('.stateBtn').on('click', function (e) {
  e.preventDefault();
  var state = Vimeetube.player.getPlayerState();
  alert(state); // numeric representation of play / stop / pause etc
});

$('.resetBtn').on('click', function (e) {
  e.preventDefault();
  Vimeetube.reset(function () {
    Vimeetube.init(your url or id); // setup UI to initial state on page load
  });
});

```

## Example Screenshot

Here is a visual example of how I have used this API in index.html.

<img src="https://raw.github.com/icodejs/vimeetube/master/img/screenshot.png"/>

***

<img src="https://raw.github.com/icodejs/vimeetube/master/img/screenshot2.png"/>
