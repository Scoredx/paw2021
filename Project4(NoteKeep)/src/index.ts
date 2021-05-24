import { App } from './app';
import './main.scss';
const app = new App();

const pinned: HTMLDivElement = document.querySelector("#pinnedNotes");
const notes: HTMLDivElement = document.querySelector("#notes");
const inputTitle: HTMLInputElement = document.querySelector("#inputTitle");
const inputText: HTMLInputElement = document.querySelector("#inputText");
const submitButton: HTMLButtonElement = document.querySelector("#submitButton");

app.pinnedDiv= pinned;
app.notesDiv = notes;

submitButton.addEventListener('click', () => {
    
    let note = app.saveToNote(app.counter, inputTitle.value,inputText.value, "lightgray", false);
    app.noteToArr(note);
    notes.appendChild(app.createNote(note));
});

window.addEventListener('beforeunload', function() {
    app.saveToLocalStorage(app.noteArr);
});

window.addEventListener('load', () => {
    
    app.noteLS = app.getNotesFromLocalStorage();
    
    if(app.noteLS){
        app.noteLS.forEach((elem, index) => {
            app.noteArr[index] = app.noteLS[index];
           
            if(app.noteLS[index].isPinned){
                pinned.appendChild(app.createNote(app.noteLS[index]));
            }else{
                notes.appendChild(app.createNote(app.noteLS[index]));
            }
        });
    }
});

