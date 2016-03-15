exports.Alarm = function(currentTime, setTime) {
  this.currentTime = currentTime;
  this.setTime = setTime;
};

exports.Alarm.prototype.triggerAlarm = function(currentTime, setTime) {
  if (currentTime === setTime) {
    return true;
  }
  else {
    return false;
  }
};
