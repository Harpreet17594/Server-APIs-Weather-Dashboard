//getting person name from buttons data-person
// var person = $(this).attr("data-person");
var searchButton = $("#searchButton");
var searchInput = $("#searchInput");
var searchInputValue = searchInput.val();
//form-heading
var formHeading = $("#form-heading");

//API KEY
// var queryURL =
//   "https://api.openweathermap.org/data/2.5/weather?lat=51.50930&lon=-0.10436&appid=120a97503c000275bcef2054f21605b7";
var queryURL =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  searchInputValue +
  "&appid=120a97503c000275bcef2054f21605b7";
// console.log(searchInputValue);

//fetch data from api on button click

searchButton.on("click", function (event) {
  event.preventDefault();

  $(".col-md-8").attr("style", "visibility: visible");
  //getting input from user
  var searchInputValue = searchInput.val();

  // var queryURL =
  //   "https://api.openweathermap.org/data/2.5/forecast?q=" +
  //   searchInputValue +
  //   "&appid=120a97503c000275bcef2054f21605b7";

  // console.log(searchInputValue);

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      searchInputValue +
      "&appid=120a97503c000275bcef2054f21605b7"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(searchInputValue);

      // console.log(data.list[0].main.temp);
      $("#temp").text("Temperature: " + data.list[0].main.temp);
      $("#wind").text("Wind : " + data.list[3].wind.speed);
      $("#humidity").text("Humidity: " + data.list[0].main.humidity);

      $("#loadIcon").attr(
        "src",
        `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
      );

      var value = searchInput.val();

      //setting current date of london
      formHeading.text(value + ": (" + dayjs().format("DD/MM/YYYY") + ")");

      //getting date
      console.log("date = " + data.list[3].dt_txt);

      // 5DAY WEATHER DETAILS
      for (var i = 0; i < 5; i++) {
        $("#temp" + (i + 1)).text("Temp: " + data.list[i].main.temp_min);
      }
      for (var i = 0; i < 5; i++) {
        $("#wind" + (i + 1)).text("Wind: " + data.list[i].wind.speed);
      }
      for (var i = 0; i < 5; i++) {
        $("#humidity" + (i + 1)).text(
          "Humidity: " + data.list[i].main.humidity
        );
      }
      for (var i = 0; i < 5; i++) {
        $("#img" + (i + 1)).attr(
          "src",
          `http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`
        );
      }
      for (var i = 0; i < 5; i++) {
        $("#date" + (i + 1)).text(data.list[i].dt_txt);
      }
    });
});

//berlin button

$("#searchBerlin").on("click", function (event) {
  event.preventDefault();
  searchInput.val("Berlin");
});

$("#searchEdinburgh").on("click", function (event) {
  event.preventDefault();
  searchInput.val("Edinburgh");
  // console.log("val :" + val);
});
$("#searchParis").on("click", function (event) {
  event.preventDefault();
  searchInput.val("Paris");
  // console.log("val :" + val);
});
$("#searchMadrid").on("click", function (event) {
  event.preventDefault();
  searchInput.val("Madrid");
  // console.log("val :" + val);
});
$("#searchBirmingham").on("click", function (event) {
  event.preventDefault();
  searchInput.val("Birmingham");
  // console.log("val :" + val);
});
$("#searchLondon").on("click", function (event) {
  event.preventDefault();
  searchInput.val("London");
  // console.log("val :" + val);
});

// window load
window.addEventListener("load", function () {
  $(".col-md-8").attr("style", "display: none;");
});
