let currentInput = ''; 
let displayValue = ''; 
function appendToResult(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

function clearResult() {
    currentInput = '';
    updateDisplay(currentInput);
}

function calculateResult() {
    try {
        const result = parseExpression(currentInput);
        currentInput = result.toString();
        updateDisplay(currentInput);
    } catch (error) {
        currentInput = 'Error';
        updateDisplay(currentInput);
    }
}

function updateDisplay(value) {
    displayValue = value;
    const resultInput = document.querySelector('.form-control');
    resultInput.value = displayValue;
}

function parseExpression(expression) {
    // Basic expression parser
    return Function('"use strict";return (' + expression + ')')();  
    // This is a simplified example, not suitable for all cases
}

document.addEventListener('DOMContentLoaded', () => {
    updateDisplay(displayValue);
});
