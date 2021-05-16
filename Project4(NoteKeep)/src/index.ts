import { App } from './app';
import './main.scss';

const createNote: HTMLDivElement = document.querySelector("#city");
const resultDiv: HTMLDivElement = document.querySelector("#result");

let noteTitle: HTMLInputElement = document.createElement("input");
noteTitle.id ="inputField";
noteTitle.innerText="";

let noteText: HTMLInputElement = document.createElement("input");
noteText.id ="inputField";
noteText.innerText="";

let submitButton: HTMLButtonElement = document.createElement("button");
submitButton.id = "submitButton";
submitButton.innerHTML = "Add";

createNote.appendChild(noteTitle);
createNote.appendChild(noteText);
createNote.appendChild(submitButton);

submitButton.addEventListener('click', () => {

    resultDiv.appendChild(app.createNote(noteTitle.value, noteText.value));
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

const app = new App();
