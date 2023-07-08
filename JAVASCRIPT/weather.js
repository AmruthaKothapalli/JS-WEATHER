const apikey = "cea9bb18676e1c0ba79108893fd24d9c";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector("#text");
const button = document.querySelector("#btn");
const image = document.querySelector(".image");
async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector("#error").style.display = "block";
    document.querySelector("#report").style.display = "none";
  }
  var data = await response.json();
  console.log(data);
  document.querySelector("#city").innerHTML = data.name;
  document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
  document.querySelector("#windy").innerHTML = data.wind.speed + "km/h";
  if (data.weather[0].main == "Clear") {
    image.src = "../images/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    image.src = "../images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    image.src = "../images/rain.png";
  } else if (data.weather[0].main == "mist") {
    image.src = "../images/mist.png";
  } else if (data.weather[0].main == "Drizzle") {
    image.src = "../images/drizzle.png";
  } else if (data.weather[0].main == "Snow") {
    image.src = "../images/snow.png";
  }
  document.querySelector("#report").style.display = "block";
  document.querySelector("#error").style.display = "none";
}
button.addEventListener("click", function () {
  checkWeather(searchbox.value);
});
