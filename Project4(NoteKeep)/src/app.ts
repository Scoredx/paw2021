export class App {
    titleArr: string[] = [];
    textArr: string[] = [];
    counter: number = 0;

    constructor() {
        
    }
    
    titleToArr(titleString: string){
        this.titleArr.push(titleString);
        //console.log(this.titleArr);
    }
    textToArr(textString: string){
        this.textArr.push(textString)
       // console.log(this.textArr);
    }

    saveToLS(titles: string[], text: string[]){
        localStorage.setItem('titles', JSON.stringify(titles));
        localStorage.setItem('text', JSON.stringify(text));
    }

    getTitlesFromLS(){
        const titles = localStorage.getItem('titles');
        if (titles) {
            return JSON.parse(titles);
        } 
        else 
        {
            return;
        }
    }

    getTextFromLS(){
        const text = localStorage.getItem('text');
        if (text) {
            return JSON.parse(text);
        } 
        else 
        {
            return;
        }
    }

    createNote(noteTitle: string, noteText: string){
        let note: HTMLDivElement = document.createElement("div");
        note.id = "note" + this.counter;
        note.className = "note";

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
        title.innerHTML = noteTitle;
        title.addEventListener('DOMSubtreeModified', () => {
            this.titleArr.splice(this.titleArr.indexOf(noteTitle),1,title.innerHTML);
        });

        let noteCloseButton: HTMLButtonElement = document.createElement("button");
        noteCloseButton.id = "noteCloseButton" + this.counter;
        noteCloseButton.className = "noteCloseButton";
        noteCloseButton.innerHTML = 'X';

        noteCloseButton.onclick = () => { 
            noteCloseButton.parentNode.parentNode.parentNode.removeChild(noteCloseButton.parentNode.parentNode);
            this.titleArr.splice(this.titleArr.indexOf(noteTitle),1);
            this.textArr.splice(this.textArr.indexOf(noteText),1);
        }

        let noteTextArea: HTMLTextAreaElement = document.createElement("textarea");
        noteTextArea.id = "noteTextArea" + this.counter;
        noteTextArea.className = "noteTextArea";
        noteTextArea.innerHTML = noteText;
        noteTextArea.rows = 8;
        noteTextArea.addEventListener('change', () => {
            this.textArr.splice(this.textArr.indexOf(noteText),1,noteTextArea.value);
        });

        let noteButtons: HTMLDivElement = document.createElement("div");
        noteButtons.id = "noteButtonsDiv";

        let pinNote: HTMLButtonElement = document.createElement("button");
        pinNote.id = "pinNote";
        pinNote.className = "noteButtons";
        pinNote.innerText = "PIN"

        let noteChangeColor: HTMLButtonElement = document.createElement("button");
        noteChangeColor.id = "noteChangeColor";
        noteChangeColor.className = "noteButtons";
        noteChangeColor.innerText = "COLOR"
        noteChangeColor.addEventListener('click', () => {

            if(document.querySelector("#changeColorDiv") == null){
                let wrapper: HTMLDivElement = document.createElement("div");
                wrapper.id = "changeColorDiv";
                for(let i = 0; i < 6; i++){
                    let color: HTMLDivElement = document.createElement("div");
                    color.className = 'colorDiv';
                    color.id = Colors[i];
                    wrapper.appendChild(color);
                }
                note.appendChild(wrapper);
            }
        })

        note.appendChild(noteDragDiv);
        noteDragDiv.appendChild(noteDate);
        note.appendChild(noteInnerWrapper);

        noteInnerWrapper.appendChild(noteTitleDiv);
        noteTitleDiv.appendChild(title);
        noteInnerWrapper.appendChild(noteCloseButton);
        noteInnerWrapper.appendChild(noteTextArea);

        note.appendChild(noteButtons);
        noteButtons.appendChild(pinNote);
        noteButtons.appendChild(noteChangeColor);

        this.counter++;
        return note;
    }
}

enum Colors {
    'yellow' = 0,
    'blue' = 1,
    'red' = 2,
    'gray' = 3,
    'purple' = 4, 
    'rose' = 5
}

