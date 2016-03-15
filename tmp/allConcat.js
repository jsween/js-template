var Alarm = require('./../js/alarm.js').Alarm;
var moment = require('moment');
var apiKey = "adfb6c08f301ba43007da5fb6b0c50b9";

$(document).ready(function(){

  $.get('http://api.openweathermap.org/data/2.5/weather?q=Portland,OR' + '&appid=' + apiKey, function(response) {
      console.log(response);
  $('.showWeather').text("The humidity in portland  is " + response.main.humidity + "%");
  });

  var timer = setInterval(function(){
  var current_time = moment().format("hh:mm");
  $('#time').text(moment().format("hh:mm:ss"));
  var set_time = $('#set_time').val();
  var alarm = new Alarm(current_time, set_time);
  var alarm_sound = alarm.triggerAlarm(current_time, set_time);

  $('#clock').submit(function(event){
    event.preventDefault();


    if(!alarm_sound){
      console.log("false");
    } else {
      $(".result").html("<iframe width='420' height='315' src='https://www.youtube.com/embed/pIgZ7gMze7A?rel=0&amp;autoplay=1' frameborder='0' allowfullscreen></iframe>");
      clearInterval(timer);
    }
    $('#date').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    $('#your_set_time').html("<h3> Your alarm is set for "+ set_time +"</h3>");
    console.log(current_time);
    console.log(set_time);
    });
    if(alarm_sound){
      $(".result").append("<iframe width='420' height='315' src='https://www.youtube.com/embed/pIgZ7gMze7A?rel=0&amp;autoplay=1' frameborder='0' allowfullscreen></iframe>");
      clearInterval(timer);
    }
    }, 500);
  });


var apiKey = "adfb6c08f301ba43007da5fb6b0c50b9";

$(document).ready(function(){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=Portland,OR' + '&appid=' + apiKey, function(response) {
      console.log(response);
  $('.showWeather').text("The humidity in portland  is " + response.main.humidity + "%");
  });
  // $('#weatherLocation').click(function(){
  //   var city = $('#location').val();
  //   $('#location').val("");
  //
  //
  // });
});
