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

// example usage
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
    alert(value);
  });
});

$('.durationBtn').on('click', function (e) {
  e.preventDefault();
  Vimeetube.player.getDuration(function (value) {
    alert(value);
  });
});

$('.embedBtn').on('click', function (e) {
  e.preventDefault();
  Vimeetube.player.getVideoEmbedCode(function (value) {
    alert(value);
  });
});

$('.videoUrlBtn').on('click', function (e) {
  e.preventDefault();
  Vimeetube.player.getVideoUrl(function (value) {
    alert(value);
  });
});

$('.stateBtn').on('click', function (e) {
  e.preventDefault();
  var state = Vimeetube.player.getPlayerState();
  alert(state);
});

$('.resetBtn').on('click', function (e) {
  e.preventDefault();
  Vimeetube.reset(function () {
    Vimeetube.init(your url or id');
  });
});

```
