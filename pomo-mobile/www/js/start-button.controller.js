angular.module('pomoApp')
  .controller('startButtonCtrl', ['$interval', 'timerService', function($interval, timerService) {
    var ctrl = this;
    ctrl.text = "Start";
    ctrl.started = false;

    ctrl.handleClick = function() {
      ctrl.started = !ctrl.started;
      ctrl.text = ctrl.started ? "Stop" : "Start";
      var action = ctrl.started ? timerService.start: timerService.stop;
      
      action();
    }

    ctrl.start = function() {
      ctrl.text = "Stop";
      ctrl.started = !ctrl.started;
      timerService.startWork();
    }

    ctrl.stop = function() {
      ctrl.text = "Start";
      ctrl.started = !ctrl.started;
      timerService.stop();
      
    }
  }])