// FUNCTIONS
const add = (x, y) => { return x + y };
const subtract = (x, y) => { return x - y };
const multiply = (x, y) => { return x * y };
const divide = (x, y) => { return x / y };
const operate = (operator, x, y) => { return operator(x, y) };

// add listeners to buttons
const buttons = document.querySelectorAll('.buttons button')
for (const button of buttons) {
    button.addEventListener("click", function () {
        console.log(button.id)
    })
} 