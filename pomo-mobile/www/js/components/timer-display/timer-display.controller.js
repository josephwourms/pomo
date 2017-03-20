angular.module('pomoApp')
  .controller('timerCtrl', ['timerService', function(timerService) {
    var ctrl = this;


    ctrl.time = timerService.getWorkTime();

    ctrl.update = timerService.onChange(function(value) {
      ctrl.time = value;
    })
  }]);