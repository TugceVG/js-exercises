let operators = ["+", "-", "/", "*"];
let priorityOperators = ["*", "/"];
let parentheses = ["(", ")"];

window.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.querySelector("#calculate-btn");
    const display = document.querySelector("#display");

    calculateBtn.addEventListener('click', function () {
        const result = startCalculation(display.innerHTML);
        display.innerHTML = result;
    });
});

function startCalculation(input, shouldFormatInput = true) {
    const formattedInput = shouldFormatInput ? formatInput(input) : input;
    const hasParantheses = formattedInput.includes("(") || formattedInput.includes(")");

    if (hasParantheses) {
        let newInput = [];

        for (let i = 0; i < formattedInput.length; i++) {
            if (formattedInput[i] === ")") {
                for (let y = i - 1; y >= 0; y--) {
                    if (formattedInput[y] === "(") {
                        let subInput = formattedInput.slice(y + 1, i);
                        let subTotal = calculate(subInput);

                        let firstPart = formattedInput.slice(0, y);
                        
                        if (y < formattedInput.length - 1) {
                            let lastPart = formattedInput.slice(i + 1, formattedInput.length);
                            newInput = [...firstPart, subTotal, ...lastPart];
                        } else {
                            newInput = [...firstPart, subTotal];
                        }
                        break;
                    }
                }
                break;
            }
        }
        return startCalculation(newInput, false);
    } else {
        return calculate(formattedInput);
    }
}

function formatInput(input) {
    let formattedInput = [];
    let numberText = "";

    for (let i = 0; i < input.length; i++) {
        let text = input[i];

        if (operators.includes(text)) {
            if (numberText) {
                formattedInput.push(numberText);
            }
            formattedInput.push(text);
            numberText = "";
        } else if (parentheses.includes(text)) {
            if (numberText) {
                formattedInput.push(numberText);
            }
            formattedInput.push(text);
            numberText = "";
        } else if (i === input.length - 1) {
            formattedInput.push(text);
        } else {
            numberText += text;
        }
    }

    return formattedInput;
}

// This calculates the numbers with priority but ONLY for the numbers which does not include any parentheses.
// And returns the calculated value as a number !
function calculate(input) {
    if (input.length === 1) {
        return input[0];
    }

    if (input.length === 3) {
        return calculateTwoNumbers(input[0], input[1], input[2]);
    }

    const hasPriority = input.some(item => item === "*" || item === "/");
    const operatorList = hasPriority ? priorityOperators : operators;

    for (let i = 0; i < input.length; i++) {
        if (operatorList.includes(input[i])) {
            let operator = input[i];
            let firstNumber = input[i - 1];
            let secondNumber = input[i + 1];

            let result = calculateTwoNumbers(firstNumber, operator, secondNumber);
            let newArray = generateArray(input, result, i);

            return calculate(newArray);
        }
    }
}

function generateArray(input, result, index) {
    let newArray = [];

    for (let y = 0; y < input.length; y++) {
        if (y === index - 1) {
            newArray.push(result);
            y = y + 2;
        } else {
            newArray.push(input[y]);
        }
    }

    return newArray;
}

function calculateTwoNumbers(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+": {
            return +firstNumber + +secondNumber;
        }
        case "-": {
            return +firstNumber - +secondNumber;
        }
        case "/": {
            return +firstNumber / +secondNumber;
        }
        case "*": {
            return +firstNumber * +secondNumber;
        }
        default:
            break;
    }
}