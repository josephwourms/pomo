angular.module('pomoApp')
  .controller('timerDisplayCtrl', ['timerService', function(timerService) {
    var ctrl = this;


    ctrl.time = timerService.getWorkTime();
    console.log(ctrl.time);

    ctrl.update = timerService.onChange(function(value) {
      ctrl.time = value;
    })
  }]);