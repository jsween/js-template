var Temperature = require('./../js/temperature.js').Temperature;
var apiKey = "adfb6c08f301ba43007da5fb6b0c50b9";

$(document).ready(function(){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=Portland,OR' + '&appid=' + apiKey, function(response) {


      var kTemp = response.main.temp;
      var newTemp = new Temperature(kTemp);
      var fahr = newTemp.convertTemp(kTemp);


      $('.showWeather').text("The humidity in portland  is " + response.main.humidity + "%, and the temperature is " + fahr + " degrees.");




      $('#temp').submit(function(event){
        event.preventDefault();
        var set_temp = $('#set_temp').val();
        var alarm_temp = newTemp.tempAlarm(fahr, set_temp);
        $('#your_set_temp').html("<h3> Your temperature alarm is set for "+ set_temp +" degrees.</h3>");
        console.log(set_temp);
        console.log(fahr);
          if(alarm_temp) {
            $(".temp_result").html("<iframe width='420' height='315' src='https://www.youtube.com/embed/GeZZr_p6vB8?rel=0&amp;autoplay=1' frameborder='0' allowfullscreen></iframe>");
          } else {
            console.log('broken');
          }
      });


  });
});

//C = K -273.15
//F = C*1.8 + 32
