exports.Temperature = function(kTemp) {
  this.kTemp = kTemp;
};

exports.Temperature.prototype.convertTemp = function(kTemp) {
  var c = kTemp - 273.15;
  var f = c * 1.8 + 32;

  return f.toFixed(2);
};

//C = K -273.15
//F = C*1.8 + 32
