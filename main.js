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

// logic to handle button press
function handleButton(button) {
    if (button.id >= 0 && button.id < 10) {
        displayNumber = button.id
        console.log(`Number ${button.id}`)
    } else {
        console.log(button.id)
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