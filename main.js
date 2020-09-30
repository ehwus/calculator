// FUNCTIONS
const add = (x, y) => { return x + y };
const subtract = (x, y) => { return x - y };
const multiply = (x, y) => { return x * y };
const divide = (x, y) => { return x / y };
const operate = (operator, x, y) => { return operator(x, y) };

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

// logic to handle button press
function handleButton(button) {
    if (button.id >= 0 && button.id < 10) {
        if (displayNumber === undefined) {
            displayNumber = button.id
        } else {
            displayNumber = parseInt(displayNumber.toString() + button.id.toString())
        }
    } else if (button.id === 'operate') {
        operand2 = displayNumber;
        displayNumber = evaluate(operation, operand1, operand2)
    } else {
        operand1 = displayNumber;
        operation = button.id
        displayNumber = undefined;
    }
    updateDisplay()
}
// update display using the global displayNumber variable
function updateDisplay() {
    display.innerHTML = displayNumber
}

// add listeners to buttons
const buttons = document.querySelectorAll('.buttons button')
for (const button of buttons) {
    button.addEventListener("click", function () {
        handleButton(button)
    })
} 