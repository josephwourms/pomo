angular.module('pomoApp') 
  .controller('breakSliderCtrl', ['timerService', function(timerService) {
    var ctrl = this;

    ctrl.breakTime = timerService.getBreakTime();

    ctrl.onChange = function(value) {
      if (timerService.isStarted) {
        return;
      }
      timerService.updateBreakTime(value);
    };
  }])