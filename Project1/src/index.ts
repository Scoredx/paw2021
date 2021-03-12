class StatsApp {
    numberInput: HTMLInputElement;
    inputsDiv: HTMLDivElement;
    inputField: HTMLInputElement;
    resulfDiv: HTMLDivElement;

    constructor() {
        this.startApp();
    }

    startApp(){
        this.getInputs();
        this.watchInputValue();
        this.generateResult();
    }
    getInputs(){
        this.numberInput = document.querySelector('#number');
        this.inputsDiv = document.querySelector('#inputsDiv');
        this.resulfDiv = document.querySelector('#resultsDiv');

    }
    watchInputValue() {
        this.numberInput.addEventListener('input',() => this.generateInputFields());
        return;
    }

    generateInputFields(){
        let number: number = 1;
        this.inputsDiv.innerHTML = null;
        for(let n = 0; n < parseInt(this.numberInput.value); n++){
            const elementInput = document.createElement('input');
            elementInput.type = "number";
            elementInput.id = "input" + n;
            const elementBr = document.createElement('br');
            elementBr.id = "br" + n;

            this.inputsDiv.appendChild(elementBr);
            this.inputsDiv.appendChild(elementInput);
            number = n;
        }
    }
    generateResult(){
        let sum: HTMLParagraphElement;
        let avg: HTMLParagraphElement;
        let min: HTMLParagraphElement;
        let max: HTMLParagraphElement;

        sum = document.createElement("p");
        sum.textContent = "Sum = ";
        this.resulfDiv.appendChild(sum);

        avg = document.createElement("p");
        avg.textContent = "Avg = ";
        this.resulfDiv.appendChild(avg);

        min = document.createElement("p");
        min.textContent = "Min = ";
        this.resulfDiv.appendChild(min);

        max = document.createElement("p");
        max.textContent = "Max = ";
        this.resulfDiv.appendChild(max);
    }

        /*
        let inputList: number[];
        for(let m = 0; m < this.inputsDiv.childElementCount; m++){

            this.inputField = document.querySelector("#input"+m);
            let p = parseInt(this.inputField.value);
            inputList.push(p);
        }
        */
    /*
    computeData(){
        const data1 = +this.data1Input.value;
        const data2 = +this.data2Input.value;
        const data3 = +this.data3Input.value;
        const data4 = +this.data4Input.value;
        const sum = data1 + data2 + data3 + data4;
        const avg = sum / 4;

        const min = Math.min(data1,data2,data3,data4);
        const max = Math.max(data1,data2,data3,data4);

        this.showStats(sum,avg,min,max);
    }

    showStats(sum: number, avg: number, min: number, max: number){
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }
    */
}

const statsApp = new StatsApp();