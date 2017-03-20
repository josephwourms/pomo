angular.module('timeFilterModule', [])
  .filter('time', function() {
    return function(seconds) {
      var hours = Math.floor(seconds / 3600);
      var minutes = Math.floor((seconds - hours * 3600) / 60);
      var seconds =  seconds - (hours * 3600) - (minutes * 60);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds: seconds;

      return `${minutes}:${seconds}`;
    };
  });