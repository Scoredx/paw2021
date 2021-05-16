"use strict";
exports.__esModule = true;
exports.App = void 0;
var App = /** @class */ (function () {
    function App() {
        this.opwApiKey = 'cee0399a2098bebcbc13c9ef29cbbf7d';
        this.cityArray = [];
        this.counter = 0;
    }
    // saveData(data: any) {
    //     localStorage.setItem('weatherData', JSON.stringify(data));
    // }
    // getData() {
    //     const data = localStorage.getItem('weatherData');
    //     if (data) {
    //         return JSON.parse(data);
    //     } 
    //     else 
    //     {
    //         return {};
    //     }
    // }
    // saveCitiesToLocalStorage(cities: string[]){
    //     if(cities == []){
    //         return;
    //     }else{
    //         let cityData: string[] = this.getCities();
    //         if(cityData){
    //             cityData.forEach(element => {
    //                 cities.push(element);
    //             });
    //         }
    //         localStorage.setItem('cityData', JSON.stringify(cities));
    //     }
    // }
    // getCities(){
    //     const cityData = localStorage.getItem('cityData');
    //     if (cityData) {
    //         return JSON.parse(cityData);
    //     } 
    //     else 
    //     {
    //         return;
    //     }
    // }
    // saveCityArray(str: string){
    //     if(this.cityArray.includes(str)){
    //         return;
    //     }else{
    //         this.cityArray.push(str);
    //     }
    // }
    // getCityName(){
    //     var str = (<HTMLInputElement>document.getElementById("inputField")).value;
    //     return str;
    // }
    App.prototype.createNote = function (cityName) {
        var note = document.createElement("div");
        note.id = "note" + this.counter;
        note.className = "note";
        var noteTitle = document.createElement("div");
        note.id = "noteTitle" + this.counter;
        note.className = "noteTitle";
        var noteCloseButton = document.createElement("button");
        noteCloseButton.id = "note" + this.counter;
        noteCloseButton.className = "note";
        var noteText = document.createElement("div");
        note.id = "noteText" + this.counter;
        note.className = "noteText";
        note.appendChild(noteTitle);
        note.appendChild(noteCloseButton);
        note.appendChild(noteText);
        this.counter++;
        return note;
    };
    return App;
}());
exports.App = App;
