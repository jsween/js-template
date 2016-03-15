exports.Temperature = function(kTemp, setTemp) {
  this.kTemp = kTemp;
  this.setTemp = setTemp;
};

exports.Temperature.prototype.convertTemp = function(kTemp) {
  var c = kTemp - 273.15;
  var f = c * 1.8 + 32;

  return f.toFixed(2);
};

exports.Temperature.prototype.tempAlarm = function(kTemp, setTemp) {
  if (kTemp === setTemp) {
    return true;
  } else {
    return false;
  }
};
//C = K -273.15
//F = C*1.8 + 32
