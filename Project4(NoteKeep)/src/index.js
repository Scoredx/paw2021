"use strict";
exports.__esModule = true;
var app_1 = require("./app");
require("./main.scss");
var inputCity = document.createElement("input");
inputCity.id = "inputField";
inputCity.innerText = "";
var submitButton = document.createElement("button");
submitButton.id = "submitButton";
submitButton.innerHTML = "Add";
var searchDiv = document.querySelector("#city");
var resultDiv = document.querySelector("#result");
searchDiv.appendChild(inputCity);
searchDiv.appendChild(submitButton);
submitButton.addEventListener('click', function () {
    //let cityName = app.getCityName();
    //resultDiv.appendChild(app.createWeatherDiv(cityName));
    resultDiv.appendChild(app.createNote('asdaasdas'));
});
// window.addEventListener('beforeunload', function() {
//     //app.saveCitiesToLocalStorage(app.cityArray);
// });
// window.addEventListener('load', () => {
//     // let cities: string[] = app.getCities();
//     // if(cities){
//     //     cities.forEach((city, countCity) => {
//     //     });
//     // }
// });
var app = new app_1.App();
