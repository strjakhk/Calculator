const numButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");

const btnSign = document.querySelector("#sign");
const btnDot = document.querySelector("#dot");
const btnClear = document.querySelector("#clear");
const btnDelete = document.querySelector("#delete");
const btnEqual = document.querySelector("#equal");

const logNode = document.querySelector("#log");
const operationNode = document.querySelector("#operation");


// Calculator instance

const calc = new Calculator();

// Event listeners for keys

numButtons.forEach(btn => btn.addEventListener("click", setNumInput));
operationButtons.forEach(btn => btn.addEventListener("click", setOperator));


btnSign.addEventListener("click", setSignOnInput);
btnDot.addEventListener("click", setDotOnInput);
btnClear.addEventListener("click", clearOperation);
btnDelete.addEventListener("click", deleteKey);
btnEqual.addEventListener("click", () => operate("="));

function operate(operator){
    calc.setCurrentArg();
    calc.operate(operator);
    operationNode.textContent = calc.getCurrentOperation();
    logNode.textContent = calc.operationLog;
}

// handlers

function setNumInput(e){
    const value = e.target.innerText;
    calc.currentArg += value;
    operationNode.textContent = calc.getCurrentOperation();
}

function setOperator(e){
    const operator = e.target.innerText;
    if (!calc.operators[operator]) return;
    if (calc.arg1 && !calc.arg2){
        calc.setCurrentArg();
        calc.currentArg = calc.arg2;
        calc.operator = operator;
    } else if (calc.arg2){
        operate(operator);
    }
    operationNode.textContent = calc.getCurrentOperation();
}

function setSignOnInput(){
    if (calc.currentArg){
        calc.currentArg *= -1
    }
    operationNode.textContent = calc.getCurrentOperation();
}

function setDotOnInput(){
    if (calc.currentArg.indexOf(".") != -1) return;
    calc.currentArg += ".";
    operationNode.textContent = calc.getCurrentOperation();
}

function clearOperation(){
    calc.clearCurrentOperation();
    calc.operationLog = "";
    calc.currentArg = "";
    operationNode.textContent = calc.getCurrentOperation();
    logNode.textContent = "";

}

function deleteKey(){
    calc.currentArg = String(calc.currentArg).slice(0, -1);
    operationNode.textContent = calc.getCurrentOperation();
}