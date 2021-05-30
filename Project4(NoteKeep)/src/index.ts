import app from './App';
import appStorage from './AppStorage';
import Note from './Note';
import Notes from './notes';
import './SCSS/reset.scss';
import './SCSS/main.scss';
import firebase from 'firebase';
import { firebaseConfig } from './config';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const notee = {
    title: "Second Note",
    text: "Note Note",
    //date: "3-3-2020",
    isPinned: false,
};

addNote(notee);
async function addNote(notee: any){
    const res = await db.collection('notes').add(notee);
}
 
deleteNote('I3w666V5VbQJY1BzpeQu');
async function deleteNote(id: string){
    const res = await db.collection('notes').doc(id).delete();
}

updateNote('WvQbk3Ok1PE7EdQF24ia',
    {
        title: 'asdasd',
        text: 'asd'
    }
);
async function updateNote(id: string, note: any){
    const res = await db.collection('notes').doc(id).update(note);
}

getNote('icYPPdH7R06pKBYBuFPo').then(res => console.log(res));
async function getNote(id: string){
    return db.collection('notes').doc(id).get().then(res => ({id: res.id, data: res.data()}));
}

getNotes().then(res => console.log(res));
async function getNotes(){
    return db.collection('notes').get().then(res => ({size: res.size, docs: res.docs}));
}

const note = new Note();
const notes = new Notes();
const pinned: HTMLDivElement = document.querySelector("#pinnedNotes");
const notesDiv: HTMLDivElement = document.querySelector("#notes");
const inputTitle: HTMLInputElement = document.querySelector("#inputTitle");
const inputText: HTMLInputElement = document.querySelector("#inputText");
const submitButton: HTMLButtonElement = document.querySelector("#submitButton");
notes.pinnedDiv = pinned;
notes.notesDiv = notesDiv;


submitButton.addEventListener('click', () => {
    
    let newNote = note.saveToNote(app.counter, inputTitle.value,inputText.value, "lightgray", false);
    note.noteToArr(newNote);
    notes.notesDiv.appendChild(notes.createNote(newNote));
});

window.addEventListener('beforeunload', function() {
    appStorage.saveToLocalStorage(app.noteArr);
});

window.addEventListener('load', () => {
    
    app.noteLS = appStorage.getNotesFromLocalStorage();
    
    if(app.noteLS){
        app.noteLS.forEach((elem, index) => {

            app.noteArr[index] = app.noteLS[index];

            if(app.noteLS[index].isPinned){
                pinned.appendChild(notes.createNote(app.noteLS[index]));
            }else{
                notesDiv.appendChild(notes.createNote(app.noteLS[index]));
            }
        });
    }
});



