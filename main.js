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
        displayNumber = operate(operation, operand1, operand2);
        updateDisplay()
    }
    else {
        operand1 = displayNumber;
        console.log(button.id)
        operation = button.id
        console.log(operation)
        displayNumber = undefined;
        updateDisplay();
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