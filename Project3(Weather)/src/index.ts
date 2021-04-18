import { App } from './app';
import './main.scss';
import { IWeatherData, IWeather } from './interface';

let inputCity: HTMLInputElement = document.createElement("input");
inputCity.id ="inputField";
inputCity.innerText=""

let submitButton: HTMLButtonElement = document.createElement("button");
submitButton.id = "submitButton";
submitButton.innerHTML = "Add";

const searchDiv: HTMLDivElement = document.querySelector("#city");
const resultDiv: HTMLDivElement = document.querySelector("#result");

searchDiv.appendChild(inputCity);
searchDiv.appendChild(submitButton);

submitButton.addEventListener('click', () => {
    let cityName = app.getCityName();
    if(app.cityArray.includes(cityName)){
        return;
    }else{
        app.getCityInfo(cityName).then(data => {
            createWeatherDiv(data, cityName);
        })
        app.saveCityArray(cityName);
        app.saveCitiesToLs(app.cityArray);
    }
    console.log(app.cityArray);
});


window.addEventListener('load', () => {
    let cities: string[] = app.getCities();
    if(cities){
        cities.forEach((city, countCity) => {
            app.getCityInfo(city).then(data => {
                createWeatherDiv(data,cities[countCity]);
            })
        });
    }
});

let counter: number = 0;
function createWeatherDiv(weather: IWeatherData,cityName: string){

    let weatherDiv: HTMLDivElement = document.createElement("div");
    weatherDiv.id = "watherDiv" + counter;
    weatherDiv.className = "weatherDiv";

    let weatherCityName: HTMLDivElement = document.createElement("div"); //City name
    weatherCityName.className = "weatherCityName";
    weatherCityName.innerHTML = cityName;
    weatherCityName.id= "weatherCityNameID" + counter;

    let weatherSkyStatus: HTMLDivElement = document.createElement("div"); //Sky status
    weatherSkyStatus.className = "weatherSkyStatus";
    weatherSkyStatus.innerHTML = weather.weather[0].main;

    let tempAndHumidityDiv: HTMLDivElement = document.createElement("div"); //Lower-container
    tempAndHumidityDiv.className = "tempAndHumidityDiv";

    let tempDiv: HTMLDivElement = document.createElement("div"); //Temp
    tempDiv.className = "tempDiv";
    tempDiv.innerHTML = weather.main.temp + "°C"

    let humidityPressureDiv: HTMLDivElement = document.createElement("div"); //Lower-Right Container
    humidityPressureDiv.className = "humidityPressureDiv";

    let pressureDiv: HTMLDivElement = document.createElement("div"); //Pressure
    pressureDiv.className = "pressureDiv";
    pressureDiv.innerHTML = "<p>Pressure: <p><br>" + weather.main.pressure.toString();

    let humidityDiv: HTMLDivElement = document.createElement("div"); //Humidity
    humidityDiv.className = "humidityDiv";
    humidityDiv.innerHTML = "<p>Humidity: <p><br>" + weather.main.humidity.toString() + "%";

    resultDiv.appendChild(weatherDiv);
    weatherDiv.appendChild(weatherCityName);
    weatherDiv.appendChild(weatherSkyStatus);
    weatherDiv.appendChild(tempAndHumidityDiv);
    tempAndHumidityDiv.appendChild(tempDiv);
    tempAndHumidityDiv.appendChild(humidityPressureDiv);
    humidityPressureDiv.appendChild(pressureDiv);
    humidityPressureDiv.appendChild(humidityDiv);

    counter++; 
}

const app = new App();
