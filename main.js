(() => {
  // CONSTANTS
  const display = document.querySelector(".display");

  // VARIABLES
  let displayNumber;
  let operand1;
  let operand2;
  let operation;

  // evaluate variables
  const evaluate = (operation, x, y) => {
    switch (operation) {
      case "multiply":
        return x * y;
      case "add":
        return x + y;
      case "subtract":
        return x - y;
      case "divide":
        return x / y;
      case "modulo":
        return x % y;
      default:
        console.error("Unknown operation");
        return;
    }
  };

  // function to reset everything
  const clear = () => {
    displayNumber = undefined;
    operand1 = undefined;
    operand2 = undefined;
  };

  // logic to handle button press
  const handleButton = (button) => {
    if (button.id >= 0 && button.id < 10) {
      if (displayNumber === undefined) {
        displayNumber = parseInt(button.id);
      } else {
        displayNumber = parseInt(
          displayNumber.toString() + button.id.toString()
        );
      }
    } else if (button.id === "operate") {
      operand2 = displayNumber;
      displayNumber = evaluate(operation, operand1, operand2);
    } else if (button.id === "polarity") {
      displayNumber *= -1;
    } else if (button.id === "AC") {
      clear();
    } else {
      operand1 = displayNumber;
      operation = button.id;
      displayNumber = undefined;
    }
    updateDisplay();
  };

  // update display using the global displayNumber variable
  const updateDisplay = () => {
    if (displayNumber === undefined) {
      display.innerHTML = "";
    } else {
      if (displayNumber % 1 !== 0)
        displayNumber = parseFloat(displayNumber.toFixed(4));
      display.innerHTML = displayNumber;
    }
  };

  // add listeners to buttons
  const buttons = document.querySelectorAll(".buttons button");
  buttons.forEach((button) =>
    button.addEventListener("click", () => handleButton(button))
  );
})();
