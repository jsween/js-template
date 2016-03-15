
var apiKey = "adfb6c08f301ba43007da5fb6b0c50b9";

$(document).ready(function(){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=Portland,OR' + '&appid=' + apiKey, function(response) {
      console.log(response);
  $('.showWeather').text("The humidity in portland  is " + response.main.humidity + "%, and the temperature is " + response.main.temp + " degrees.");
  });
  // $('#weatherLocation').click(function(){
  //   var city = $('#location').val();
  //   $('#location').val("");
  //
  //
  // });
});

//C = K -273.15
//F = C*1.8 + 32
