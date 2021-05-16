import { IWeatherData, IWeather } from './interface';

export class App {
    opwApiKey = 'cee0399a2098bebcbc13c9ef29cbbf7d';
    cityArray: string[] = [];
    counter: number = 0;

    constructor() {
        
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

    createNote(noteTitle: string, noteText: string){
        let note: HTMLDivElement = document.createElement("div");
        note.id = "note" + this.counter;
        note.className = "note";

        let noteDragDiv: HTMLDivElement = document.createElement("div");
        noteDragDiv.id = "noteDrag" + this.counter;
        noteDragDiv.className = "noteDrag";

        let noteTitleDiv: HTMLDivElement = document.createElement("div");
        noteTitleDiv.id = "noteTitle" + this.counter;
        noteTitleDiv.className = "noteTitle";
        noteTitleDiv.innerHTML = noteTitle;

        let noteCloseButton: HTMLButtonElement = document.createElement("button");
        noteCloseButton.id = "noteCloseButton" + this.counter;
        noteCloseButton.className = "noteCloseButton";

        let noteTextDiv: HTMLDivElement = document.createElement("div");
        noteTextDiv.id = "noteText" + this.counter;
        noteTextDiv.className = "noteText";
        noteTextDiv.innerHTML = noteText;

        note.appendChild(noteDragDiv);
        note.appendChild(noteTitleDiv);
        note.appendChild(noteCloseButton);
        note.appendChild(noteTextDiv);

        this.counter++;
        return note;
    }
}
  
