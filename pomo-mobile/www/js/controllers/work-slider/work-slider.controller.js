angular.module('pomoApp') 
  .controller('workSliderCtrl', ['timerService', function(timerService) {
    var ctrl = this;
    ctrl.workTime = timerService.getWorkTime();

    ctrl.onChange = function(value) {
      if (timerService.isStarted) {
        return;
      }
      timerService.updateWorkTime(value);
    };
  }])