// get ui elements
const display = document.querySelector("#display");
// const controlButtons = document.querySelector(".controls");
const clearButton = document.querySelector("#clear");
const allClearButton = document.querySelector("#all-clear")
const equalsButton = document.querySelector("#equals");
const numberButtons = document.querySelector(".numbers");
const oprButtons = document.querySelector(".operators");
const specialFnButtons = document.querySelector(".functions"); //might be subject to change


// add listners
numberButtons.addEventListener("click", sendToDisplay);
oprButtons.addEventListener("click", sendToDisplay);
equalsButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clear);
allClearButton.addEventListener("click", clearAll);



function sendToDisplay(e){
    if (e.target.textContent.length != 1)
        return;
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