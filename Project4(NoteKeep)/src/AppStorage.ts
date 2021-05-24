import App from './app';
const app = new App;

export class AppStorage{

    noteToArr(note: INote){
        app.noteArr.push(note);
        app.counter++;
    }

    saveToLocalStorage(noteArr: INote[]){
        localStorage.setItem("noteLS", JSON.stringify(noteArr));
    }

    getNotesFromLocalStorage(){
        const notes = localStorage.getItem("noteLS");
        if (notes) {
            return JSON.parse(notes);
        } 
        else 
        {
            return;
        }
    }
}

export default  AppStorage;