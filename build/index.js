'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var randomizeBgColors = exports.randomizeBgColors = function randomizeBgColors() {
  var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var totalTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10000;

  var usedBgColors = {};

  function getRandomHexColor() {
    var c = '#000000'.replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    while (usedBgColors[c] !== undefined) {
      c = getRandomHexColor();
    }
    usedBgColors[c] = true;
    return c;
  }

  document.body.style['background-color'] = getRandomHexColor();
  var bgInterval = setInterval(function () {
    document.body.style['background-color'] = getRandomHexColor();
  }, interval);
  setTimeout(function () {
    clearInterval(bgInterval);
  }, totalTime - interval);
};