// CONSTANTS
const display = document.querySelector(".display");

// VARIABLES
let displayNumber;
let operand1;
let operand2;
let operation;

// evaluate variables
function evaluate(operation, x, y) {
    if (operation === 'multiply') {
        return x * y;
    } else if (operation === 'add') {
        return x + y;
    } else if (operation === 'subtract') {
        return x - y;
    } else if (operation === 'divide') {
        return x / y;
    } else if (operation === 'modulo') {
        return x % y;
    }
}

// function to reset everything
function clear() {
    displayNumber = undefined;
    operand1 = undefined;
    operand2 = undefined;
}

// logic to handle button press
function handleButton(button) {
    if (button.id >= 0 && button.id < 10) {
        if (displayNumber === undefined) {
            displayNumber = parseInt(button.id)
        } else {
            displayNumber = parseInt(displayNumber.toString() + button.id.toString())
        }
    } else if (button.id === 'operate') {
        operand2 = displayNumber;
        displayNumber = evaluate(operation, operand1, operand2)
    } else if (button.id === 'polarity') {
        displayNumber *= -1
    } else if (button.id === 'AC') {
        clear()
    } else {
        operand1 = displayNumber;
        operation = button.id
        displayNumber = undefined;
    }
    updateDisplay()
}
// update display using the global displayNumber variable
function updateDisplay() {
    if (displayNumber === undefined) {
        display.innerHTML = ""
    } else {
        display.innerHTML = displayNumber
    }
    
}

// add listeners to buttons
const buttons = document.querySelectorAll('.buttons button')
for (const button of buttons) {
    button.addEventListener("click", function () {
        handleButton(button)
    })
} 