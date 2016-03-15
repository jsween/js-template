var expect = require('chai').expect;
var Alarm = require('./../js/alarm.js').Alarm;

describe("Alarm", function() {
  it("will return the current time", function() {
    var currentTime = "12:00";
    var setTime = "12:00";
    var testAlarm = new Alarm(currentTime, setTime);
    expect(testAlarm.currentTime).to.equal(currentTime);
  });
  it("will return the current time", function() {
    var currentTime = "12:00";
    var setTime = "12:00";
    var testAlarm = new Alarm(currentTime, setTime);
    expect(testAlarm.setTime).to.equal(setTime);
  });
  it("will trigger a freakish alarm", function() {
    var currentTime = "12:00";
    var setTime = "12:00";
    var testAlarm = new Alarm(currentTime, setTime);
    expect(testAlarm.triggerAlarm(currentTime, setTime)).to.equal(true);
  });
  it("will trigger a freakish alarm", function() {
    var currentTime = "12:00";
    var setTime = "12:05";
    var testAlarm = new Alarm(currentTime, setTime);
    expect(testAlarm.triggerAlarm(currentTime, setTime)).to.equal(false);
  });
});
