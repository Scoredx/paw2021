var app2 = /** @class */ (function () {
    function app2() {
        this.div = document.querySelector('#inputFieldsDiv');
        this.input = document.createElement('input');
        this.input.type = 'number';
        this.div.appendChild(this.input);
    }
    return app2;
}());
var app3 = new app2();
