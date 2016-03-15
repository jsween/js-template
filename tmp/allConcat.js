var Alarm = require('./../js/alarm.js').Alarm;
var moment = require('moment');
var apiKey = "adfb6c08f301ba43007da5fb6b0c50b9";

$(document).ready(function(){


  $('#date').text(moment().format("dddd, MMMM Do YYYY"));
  setInterval(function(){
  $('#time').text(moment().format("hh:mm:ss"));
  }, 500);
  var timer = setInterval(function(){
  var current_time = moment().format("HH:mm");

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

var Temperature = require('./../js/temperature.js').Temperature;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  var tempArr = [];
  $.get('http://api.openweathermap.org/data/2.5/weather?q=Portland,OR' + '&appid=' + apiKey).then(function(response) {
      var kTemp = response.main.temp;
      var newTemp = new Temperature(kTemp);
      var fahr = newTemp.convertTemp(kTemp);
      var humidity = response.main.humidity;
      var wind = response.wind.speed;


      $('.showWeather').text("The humidity in portland  is " + humidity + "%, the temperature is " + fahr + " degrees, and the wind speed is " + wind +".");

      if(humidity > 80 || wind > 3) {
        $('.weatherPic').append("<p><img src='../images/cloud.svg' class='icon'></p> <p><img src='../images/weather.svg' class='icon'></p>")
      }



      $('#temp').submit(function(event){
        event.preventDefault();
        var set_temp = $('#set_temp').val();
        var alarm_temp = newTemp.tempAlarm(fahr, set_temp);
        $('#your_set_temp').html("<h3> Your temperature alarm is set for "+ set_temp +" degrees.</h3>");
          if(alarm_temp) {
            $(".temp_result").html("<iframe width='420' height='315' src='https://www.youtube.com/embed/GeZZr_p6vB8?rel=0&amp;autoplay=1' frameborder='0' allowfullscreen></iframe>");
          } else {
            tempArr.unshift(set_temp);
          }

      });


  }).fail(function(error){
    $('.showWeather').text(error.responseJSON.message);
  });

  $('form#search').submit(function(event){
    console.log(tempArr[0]);
    event.preventDefault();
    var city = $('#city').val();

    $.get('http://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + apiKey).then(function(response) {
        var kTemp = response.main.temp;
        var newTemp = new Temperature(kTemp);
        var fahr = newTemp.convertTemp(kTemp);
        var humidity = response.main.humidity;
        var wind = response.wind.speed;


        $('.showWeather').text("The humidity in " + city + " is " + humidity + "%, the temperature is " + fahr + " degrees, and the wind speed is " + wind +".");

        if(humidity > 40 || wind > 3) {
          $('.weatherPic').html("<p><img src='../images/cloud.svg' class='icon'></p> <p><img src='../images/weather.svg' class='icon'></p>")
        } else {
          $('.weatherPic').html("<p><img src='../images/summer.svg' class='icon'></p>");
        }

        var set_temp = tempArr[0];

        var alarm_temp = newTemp.tempAlarm(fahr, set_temp);
        $('#your_set_temp').html("<h3> Your temperature alarm is set for "+ set_temp +" degrees.</h3>");
        if(alarm_temp) {
          $(".temp_result").html("<iframe width='420' height='315' src='https://www.youtube.com/embed/GeZZr_p6vB8?rel=0&amp;autoplay=1' frameborder='0' allowfullscreen></iframe>");
        } else {
          $(".temp_result").html("<iframe width='420' height='315' src='https://www.youtube.com/embed/OkYSt9AOwhM?rel=0&amp;autoplay=1' frameborder='0' allowfullscreen></iframe>");         
        }
        // $('#temp').submit(function(event){
        //   event.preventDefault();
        //   set_temp = $('#set_temp').val();
        //   var alarm_temp = newTemp.tempAlarm(fahr, set_temp);
        //   $('#your_set_temp').html("<h3> Your temperature alarm is set for "+ set_temp +" degrees.</h3>");
        //     if(alarm_temp) {
        //       $(".temp_result").html("<iframe width='420' height='315' src='https://www.youtube.com/embed/GeZZr_p6vB8?rel=0&amp;autoplay=1' frameborder='0' allowfullscreen></iframe>");
        //     } else {
        //       console.log('broken');
        //     }
        // });


    }).fail(function(error){
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});

//C = K -273.15
//F = C*1.8 + 32
