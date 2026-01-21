const numButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operation");

const btnSign = document.querySelector("#sign");
const btnDot = document.querySelector("#dot");
const btnClear = document.querySelector("#clear");
const btnDelete = document.querySelector("#delete");
const btnEqual = document.querySelector("#equal");


// Calculator instance

const calc = new Calculator();

// Event listeners for keys

numButtons.forEach(btn => btn.addEventListener("click", setNumInput));
operationButtons.forEach(btn => btn.addEventListener("click", setOperator));


btnSign.addEventListener("click", setSignOnInput);
btnDot.addEventListener("click", setDotOnInput);
btnClear.addEventListener("click", clearOperation);
btnDelete.addEventListener("click", deleteKey);
btnEqual.addEventListener("click", calc.operate("="));


// handlers

function setNumInput(e){
    const value = e.target.innerText;
    if (!calc.operator){
        calc.arg1 += value;
    }else{
        calc.arg2 += value;
    }
}

function setOperator(e){
    const operator = e.target.innerText;
    if (!calc.operators[operator]) return;
    if (calc.arg1 && !calc.arg2){
        calc.operator = operator;
        return;
    }
    if (calc.arg2){
        calc.operate(operator);
    }
}