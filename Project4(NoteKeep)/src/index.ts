import { App } from './app';
import './main.scss';

const resultDiv: HTMLDivElement = document.querySelector("#result");
const inputTitle: HTMLInputElement = document.querySelector("#inputTitle");
const inputText: HTMLInputElement = document.querySelector("#inputText");
const submitButton: HTMLButtonElement = document.querySelector("#submitButton");
const noteCloseButton: HTMLButtonElement = document.querySelector(".noteCloseButton");


submitButton.addEventListener('click', () => {

    resultDiv.appendChild(app.createNote(inputTitle.value, inputText.value));
    app.getTitle(inputTitle.value);
    app.getText(inputText.value);

});


window.addEventListener('beforeunload', function() {
    app.saveTitleAndText(app.titleArr, app.textArr);
});

window.addEventListener('load', () => {
    let titlesLS: string[] = app.getTitlesFromLS();
    let textLS: string[] = app.getTextFromLS();

    if(titlesLS && textLS){
        titlesLS.forEach((x, index) => {
            app.titleArr[index] = titlesLS[index];
            app.textArr[index] = textLS[index];
            resultDiv.appendChild(app.createNote(titlesLS[index],textLS[index]));
        });
    }
});

const app = new App();
