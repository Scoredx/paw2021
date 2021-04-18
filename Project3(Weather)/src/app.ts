import { IWeatherData, IWeather } from './interface';

export class App {
    opwApiKey = 'cee0399a2098bebcbc13c9ef29cbbf7d';
    cityArray: string[] = [];

    constructor() {
        
    }

    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        this.saveData(weather);
        return weather;
    }
    async getWeather(city: string): Promise<IWeatherData> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        return weatherData;
    }
    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } 
        else 
        {
            return {};
        }
    }
    
    saveCitiesToLs(cities: string[]){
        localStorage.setItem('cityData', JSON.stringify(cities));
    }

    getCities(){
        const cityData = localStorage.getItem('cityData');
        if (cityData) {
            return JSON.parse(cityData);
        } 
        else 
        {
            return {};
        }
    }

    saveCityArray(str: string){
        
        if(this.cityArray.includes(str)){
            return;
        }else{
            this.cityArray.push(str);
        }
        console.log(this.cityArray);
    }

    getCityName(){
        var str = (<HTMLInputElement>document.getElementById("inputField")).value;
        return str;
    }
}
  
