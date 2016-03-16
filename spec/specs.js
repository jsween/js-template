var expect = require('chai').expect;
var Class = require('./../js/class.js').Class;

describe("Class", function() {
  it("will return the current property", function() {
    var currentProperty = "12:00";
    var setProperty = "12:00";
    var testClass = new Class(currentProperty, setProperty);
    expect(testClass.currentProperty).to.equal(currentProperty);
  });
  it("will return the set property", function() {
    var currentProperty= "12:00";
    var setProperty= "12:00";
    var testClass = new Class(currentProperty, setProperty);
    expect(testClass.setProperty).to.equal(setProperty);
  });
  it("will trigger a freakish alarm", function() {
    var currentProperty = "12:00";
    var setProperty = "12:00";
    var testClass = new Class(currentProperty, setProperty);
    expect(testClass.triggerAlarm(currentProperty, setProperty)).to.equal(true);
  });
  it("will trigger a freakish alarm", function() {
    var currentProperty = "12:00";
    var setProperty = "12:05";
    var testClass = new Class(currentProperty, setProperty);
    expect(testClass.triggerAlarm(currentProperty, setProperty)).to.equal(false);
  });
});
