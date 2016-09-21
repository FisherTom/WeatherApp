var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  var response = JSON.parse(httpGet("http://api.openweathermap.org/data/2.5/weather?lat=" + crd.latitude + "&lon=" + crd.longitude +"&appid=999fa0575bb1b40bb6b2c958138a24aa&units=metric"));
  document.getElementById("basic-weather-holder").innerHTML = response.weather["0"].main;
  document.getElementById("value-holder").innerHTML = parseInt(response.main.temp, 10) ;
};

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var currentdate = new Date();

document.getElementById("day-holder").innerHTML = days[currentdate.getDay()];
document.getElementById("date-holder").innerHTML = currentdate.getDate();
document.getElementById("month-holder").innerHTML = months[currentdate.getMonth()];

navigator.geolocation.getCurrentPosition(success, error, options);
