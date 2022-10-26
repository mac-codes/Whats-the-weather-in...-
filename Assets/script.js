APIkey = '2ffc2e7aac4fe6aecae97b38ba1b9486'

//DAY 1 ______________________________________________
function updatePage(cityDate) {
  var iconURL = 'http://openweathermap.org/img/wn/' + cityData.list[0].weather[0].icon + '@2x.png';

  var cityName = cityData.city.name;
  var dateTime = cityData.list[0].dt * 1000;
  var date = new Date(dateTime);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  var theDate = '(' + month + '/' + day + '/' + yea +')';

  var iconImg = $('#icon').attr({
    src: iconURL,
    alt: cityData.list[0].weather.description,
  });
  $('h3').text(cityName + ' ' + theDate);
  $('.temp').text('Temperature: ' + cityData.list[0].main.temp + '°');
  $('.humidity').text('humidity: ' + cityData.list[0].main.humidity + '%');
  $('.wind').text('wind Speed: ' + cityData.list[0].wind.speed + 'mph');
  $('h3').append(iconImg)

  var latitude = cityData.city.coord.lat;
  var longitude = cityData.city.coord.lon;



//DAY 2 ______________________________________________
var iconURL2 = 'http://openweathermap.org/img/wn/' + cityData.list[1].weather[0].icon + '@2x.png';

var dateTime2 = cityData.list[1].dt * 1000;
var date2 = new Date(dateTime2);
var month2 = date2.getMonth() + 1;
var day2 = date2.getDate();

var theDate2 = month2 + '/' + day2 + '/' + year;

$('#icon2').attr({
  src: iconURL2,
  alt: cityData.list[1].weather[0].description,
});
$('#day-2').text(theDate2);
$('#temp2').text('Temp: ' +cityData.list[1].main.temp + '%')
$('#hum2').text('Humidity: ' + cityData.list[1].main.humidity + '%')
//DAY 3 ______________________________________________
var iconURL3 = 'http://openweathermap.org/img/wn/' + cityData.list[2].weather[0].icon + '@2x.png';

var dateTime3 = cityData.list[2].dt * 1000;
var date3 = new Date(dateTime3);
var month3 = date3.getMonth() + 1;
var day3 = date3.getDate();

var theDate3 = month3 + '/' + day3 + '/' + year;

$('#icon3').attr({
  src: iconURL3,
  alt: cityData.list[2].weather[0].description,
});
$('#day-3').text(theDate2);
$('#temp3').text('Temp: ' +cityData.list[2].main.temp + '%')
$('#hum3').text('Humidity: ' + cityData.list[2].main.humidity + '%')
//DAY 4 ______________________________________________
var iconURL4 = 'http://openweathermap.org/img/wn/' + cityData.list[3].weather[0].icon + '@2x.png';

var dateTime4 = cityData.list[3].dt * 1000;
var date4 = new Date(dateTime4);
var month4 = date4.getMonth() + 1;
var day4 = date4.getDate();

var theDate4 = month4 + '/' + day4 + '/' + year;

$('#icon4').attr({
  src: iconURL4,
  alt: cityData.list[3].weather[0].description,
});
$('#day-4').text(theDate4);
$('#temp4').text('Temp: ' +cityData.list[1].main.temp + '%')
$('#hum4').text('Humidity: ' + cityData.list[1].main.humidity + '%')
//DAY 5 ______________________________________________
var iconURL5 = 'http://openweathermap.org/img/wn/' + cityData.list[4].weather[0].icon + '@2x.png';

var dateTime5 = cityData.list[4].dt * 1000;
var date5 = new Date(dateTime5);
var month5 = date5.getMonth() + 1;
var day5 = date5.getDate();

var theDate5 = month5 + '/' + day5 + '/' + year;

$('#icon5').attr({
  src: iconURL5,
  alt: cityData.list[4].weather[0].description,
});
$('#day-5').text(theDate5);
$('#temp5').text('Temp: ' +cityData.list[1].main.temp + '%')
$('#hum5').text('Humidity: ' + cityData.list[1].main.humidity + '%')
};

('#search').on('click', function (event){
  event.preventDefault();

  var userInput = $('#searchCity').val();
  var newList = $('<li>').addClass('list-group-item');
  $('#searchHistory').prepend(newList);
  newList.text(userInput);

  $('#weather').css('visibility', 'visible');

  var queryURL = buildQueryURL();

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(updatePage)
});