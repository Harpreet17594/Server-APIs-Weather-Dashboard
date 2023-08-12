//API KEY 120a97503c000275bcef2054f21605b7
// var queryURL =
//   ;
$("#buttonSearch").click(function () {
  https: fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=london&appid=120a97503c000275bcef2054f21605b7"
  )
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < 5; i++) {
        document.getElementById("min" + (i + 1)).innerHTML =
          "MINIMUM Temp = " + data.list[i].main.temp_min;
        console.log(data.list[i].main.temp_min);
      }
      for (var i = 0; i < 5; i++) {
        document.getElementById("max" + (i + 1)).innerHTML =
          "MaxiMUM Temp = " + data.list[i].main.temp_max;
        console.log(data.list[i].main.temp_max);
      }
      for (var i = 0; i < 5; i++) {
        document.getElementById("img" + (i + 1)).src =
          "http://openweathermap.org/img/w/" +
          data.list[0].weather[0].icon +
          ".png";
        // console.log(data.list[i].main.temp_max);
      }
    });
});
