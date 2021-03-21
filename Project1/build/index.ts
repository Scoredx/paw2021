class app2{
    div = document.querySelector('#inputFieldsDiv');
    input = document.createElement('input');

    constructor(){
        
        this.input.type = 'number';
        this.div.appendChild(this.input);
    }
}
const app3 = new app2();