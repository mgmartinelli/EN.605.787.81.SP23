(function (window) {
  var helloSpeaker = {};

  var speakWord = "Hello";

  helloSpeaker.speak = function speak(name) {
    console.log(this.speakSimple(name));
  };

  helloSpeaker.speakSimple = function speakSimple(name) {
    return speakWord + " " + name;
  };

  window.helloSpeaker = helloSpeaker;
})(window);
