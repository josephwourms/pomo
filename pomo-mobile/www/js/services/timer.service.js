angular.module('pomoApp')
  .service('timerService', ['$interval', function($interval) {
    var callbacks = [];

    var timer = this;
    timer.workTime = 1500;
    timer.breakTime = 300;

    timer.isStarted = false;
    timer.working = false;

    timer.updateWorkTime = function(time) {
      timer.workTime = time;
      for (i = 0; i < callbacks.length; i++) {
        callbacks[i](time);
      }
    }

    timer.updateBreakTime = function(time) {
      timer.breakTime = time;
    }

    timer.getWorkTime = function() {
      return timer.workTime;
    }

    timer.getBreakTime = function() {
      return timer.breakTime;
    }

    timer.set = function(value) {
      if (value < 0) {
        $interval.cancel(timer.timer);
        timer.start();
        return;
      }
      timer.currentTime = value;
      console.log(timer.currentTime);
      for (i = 0; i < callbacks.length; i++) {
        callbacks[i](value);
      }
    }

    timer.onChange = function(callback) {
      callbacks.push(callback);
    }

    timer.start = function() {
      timer.isStarted = true;
      timer.working = !timer.working;
      timer.currentTime = timer.working ? timer.workTime : timer.breakTime;
      timer.timer = $interval(() => timer.set(timer.currentTime - 1), 1000);
    }

    timer.stop = function() {
      timer.isStarted = false;
      timer.working = false;
      timer.set(timer.workTime);
      $interval.cancel(timer.timer);
    }


  }]);