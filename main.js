// FUNCTIONS
const add = (x, y) => { return x + y };
const subtract = (x, y) => { return x - y };
const multiply = (x, y) => { return x * y };
const divide = (x, y) => { return x / y };
const operate = (operator, x, y) => { return operator(x, y) };

// logic to handle button press
function handleButton(button) {
    if (button.id >= 0 && button.id < 10) {
        console.log(`Number ${button.id}`)
    } else {
        console.log(button.id)
    }
    
}

// add listeners to buttons
const buttons = document.querySelectorAll('.buttons button')
for (const button of buttons) {
    button.addEventListener("click", function () {
        handleButton(button)
    })
} 