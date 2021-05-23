export class App {

    noteLS: Note[] = [];
    noteArr: Note[] = [];
    pinnedDiv: HTMLDivElement;
    notesDiv: HTMLDivElement;
    counter: number = 0;
   

    saveToNote(noteTitle: string, noteText: string, noteBgColor: string, isNotePinned: boolean){
        let newDate = new Date();
        let note: Note = {
            title: noteTitle,
            text: noteText,
            bgColor: noteBgColor,
            isPinned: isNotePinned,
            date: newDate.toISOString().split('T')[0]
        }
        return note;
    }

    noteToArr(note: Note){
        this.noteArr.push(note);
    }

    saveToLocalStorage(noteArr: Note[]){
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

    createNote(note: Note){
        let noteDiv: HTMLDivElement = document.createElement("div");
        noteDiv.id = this.counter.toString();
        noteDiv.className = "note";
        noteDiv.style.backgroundColor = note.bgColor;

        let noteInnerWrapper: HTMLDivElement = document.createElement("div");
        noteInnerWrapper.id = "noteInnerWrapper" + this.counter;
        noteInnerWrapper.className = "noteInnerWrapper";

        let noteDragDiv: HTMLDivElement = document.createElement("div");
        noteDragDiv.id = "noteDrag" + this.counter;
        noteDragDiv.className = "noteDrag";

        let newDate = new Date()
        let noteDate: HTMLSpanElement = document.createElement("span");
        noteDate.id = "noteDate" + this.counter;
        noteDate.className = "noteDate";
        noteDate.innerHTML = newDate.toISOString().split('T')[0];

        let noteTitleDiv: HTMLDivElement = document.createElement("div");
        noteTitleDiv.id = "noteTitle" + this.counter;
        noteTitleDiv.className = "noteTitle";
        noteTitleDiv.contentEditable = "true";
        
        let title: HTMLSpanElement =  document.createElement("span");
        title.id = "noteTitle" + this.counter;
        title.className = "noteTitle";
        title.innerHTML = note.title;
        title.addEventListener('DOMSubtreeModified', () => {
            note.title = title.innerHTML;
        });

        let noteCloseButton: HTMLButtonElement = document.createElement("button");
        noteCloseButton.id = "noteCloseButton" + this.counter;
        noteCloseButton.className = "noteCloseButton";
        noteCloseButton.innerHTML = 'X';

        noteCloseButton.onclick = () => { 
            noteCloseButton.parentNode.parentNode.parentNode.removeChild(noteCloseButton.parentNode.parentNode);
            this.noteLS.splice(parseInt(noteDiv.id),1);
        }

        let noteTextArea: HTMLTextAreaElement = document.createElement("textarea");
        noteTextArea.id = "noteTextArea" + this.counter;
        noteTextArea.className = "noteTextArea";
        noteTextArea.innerHTML = note.text
        noteTextArea.rows = 8;
        noteTextArea.addEventListener('change', () => {
            note.text = noteTextArea.value;
        });

        let noteButtons: HTMLDivElement = document.createElement("div");
        noteButtons.id = "noteButtonsDiv";

        let pinNote: HTMLElement = document.createElement("checkbox");
        pinNote.id = "pinNote";
        pinNote.className = "noteButtons";
        pinNote.innerText = "PIN"
        pinNote.addEventListener('click', () => {
            if(!note.isPinned){
                this.pinnedDiv.appendChild(noteDiv);
                note.isPinned = true;
                
            }else{
                this.notesDiv.appendChild(noteDiv);
                note.isPinned = false;
            }
        });

        let noteChangeColor: HTMLButtonElement = document.createElement("button");
        noteChangeColor.id = "noteChangeColor";
        noteChangeColor.className = "noteButtons";
        noteChangeColor.innerText = "COLOR"
        noteChangeColor.addEventListener('click', () => {

            if(document.querySelector("#changeColorDiv") == null){
                let wrapper: HTMLDivElement = document.createElement("div");
                wrapper.id = "changeColorDiv" + this.counter;
                wrapper.className = "changeColorDiv"
                wrapper.tabIndex= 1;
                noteDiv.appendChild(wrapper);
                wrapper.focus();
                wrapper.addEventListener('focusout',() => {
                    wrapper.parentNode.removeChild(wrapper);
                });
                for(let i = 0; i < 6; i++){
                    let colorDiv: HTMLDivElement = document.createElement("div");
                    colorDiv.className = 'colorDiv';
                    colorDiv.id = Colors[i];

                    let colorCircle: HTMLDivElement = document.createElement("div");
                    colorCircle.className = "colorCircle"
                    colorCircle.style.backgroundColor = Colors[i];

                    colorCircle.addEventListener('click', () => {
                        noteDiv.style.backgroundColor = colorCircle.style.backgroundColor;
                        note.bgColor = colorCircle.style.backgroundColor
                    })
                    colorDiv.appendChild(colorCircle);
                    wrapper.appendChild(colorDiv);
                }
            }
        })
        noteDiv.appendChild(noteDragDiv);
        noteDragDiv.appendChild(noteDate);
        noteDiv.appendChild(noteInnerWrapper);

        noteInnerWrapper.appendChild(noteTitleDiv);
        noteTitleDiv.appendChild(title);
        noteInnerWrapper.appendChild(noteCloseButton);
        noteInnerWrapper.appendChild(noteTextArea);

        noteDiv.appendChild(noteButtons);
        noteButtons.appendChild(pinNote);
        noteButtons.appendChild(noteChangeColor);

        this.counter++;
        return noteDiv;
    }
}

enum Colors {
    yellow = 0,
    blue = 1,
    red = 2,
    lightgray = 3,
    purple = 4, 
    pink = 5
}

type Note = {
    title: string,
    text: string,
    date: string,
    bgColor: string,
    isPinned: boolean;
 }
 