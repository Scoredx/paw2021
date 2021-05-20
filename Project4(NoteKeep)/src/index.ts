import { App } from './app';
import './main.scss';

const resultDiv: HTMLDivElement = document.querySelector("#result");
const inputTitle: HTMLInputElement = document.querySelector("#inputTitle");
const inputText: HTMLInputElement = document.querySelector("#inputText");
const submitButton: HTMLButtonElement = document.querySelector("#submitButton");

submitButton.addEventListener('click', () => {
    resultDiv.appendChild(app.createNote(inputTitle.value, inputText.value));
    app.titleToArr(inputTitle.value);
    app.textToArr(inputText.value);

});

window.addEventListener('beforeunload', function() {
    console.log(app.titleArr, app.textArr);
    app.saveToLS(app.titleArr, app.textArr);
});

window.addEventListener('load', () => {
    
    let titlesLS: string[] = app.getTitlesFromLS();
    let textLS: string[] = app.getTextFromLS();

    if(titlesLS && textLS){
        titlesLS.forEach((x, index) => {
            app.titleArr[index] = titlesLS[index];
            app.textArr[index] = textLS[index];

            if(app.titleArr.length >= 1 &&  app.textArr.length >= 1){
                resultDiv.appendChild(app.createNote(titlesLS[index],textLS[index]));
            }

        });
    }
});

const app = new App();
