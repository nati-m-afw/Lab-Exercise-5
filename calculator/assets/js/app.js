// get ui elements
const display = document.querySelector("#display");
// const controlButtons = document.querySelector(".controls");
const clearButton = document.querySelector("#clear");
const allClearButton = document.querySelector("#all-clear")
const equalsButton = document.querySelector("#equals");
const numberButtons = document.querySelector(".numbers");
const oprButtons = document.querySelector(".operators");
const openParenthesesButton = document.querySelector("#open_parentheses");
const closeParenthesesButton = document.querySelector("#close_parentheses");
const squareButton = document.querySelector("#square");
const rootButton = document.querySelector("#root");
const logButton = document.querySelector("#log");
const inverseButton = document.querySelector("#inverse");

// add listners
numberButtons.addEventListener("click", sendToDisplay);
oprButtons.addEventListener("click", sendToDisplay);
openParenthesesButton.addEventListener("click", sendToDisplay)
closeParenthesesButton.addEventListener("click", sendToDisplay)
equalsButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clear);
allClearButton.addEventListener("click", clearAll);
squareButton.addEventListener("click", calcSquare);
rootButton.addEventListener("click", calcRoot);
logButton.addEventListener("click", calcLog);
inverseButton.addEventListener("click", calcInverse);


function sendToDisplay(e){
    if (e.target.textContent.length != 1){
        return;
    }
    else if (e.target.textContent == '%'){
        display.value += "/100";
        return;
    }
    display.value += e.target.textContent;
}

function calculate(e){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Math Error!";
    }
}

function clear(e){
    display.value = display.value.slice(0, -1);
}

function clearAll(e){
    display.value = '';
}

function calcSquare(e){
    try {
        display.value = Math.pow(display.value, 2);
    } catch (error) {
        display.value = "Math Error!";
    }
}

function calcRoot(e){
    try {
        if (display.value < 0){
            display.value = 'Invalid input!';
            return;
        }
        display.value = Math.sqrt(display.value);
    } catch (error) {
        display.value = "Math Error!";
    }
}

function calcLog(e){
    try {
        display.value = Math.log10(display.value);
    } catch (error) {
        display.value = "Math Error!";
    }
}

function calcInverse(e){
    try {
        display.value = 1 / display.value;
    } catch (error) {
        display.value = "Math Error!";
    }
}