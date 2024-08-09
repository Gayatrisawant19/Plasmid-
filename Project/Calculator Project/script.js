const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operation = null;

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.innerText);
    });
});

function handleButtonClick(value) {
    if (!isNaN(value) || value === '.') {
        currentInput += value;
        display.innerText = currentInput;
    } else if (value === 'AC') {
        currentInput = '';
        previousInput = '';
        operation = null;
        display.innerText = '0';
    } else if (value === 'x²') {
        currentInput = (parseFloat(currentInput) ** 2).toString();
        display.innerText = currentInput;
    } else if (value === '=') {
        if (operation && previousInput) {
            currentInput = operate(previousInput, currentInput, operation).toString();
            display.innerText = currentInput;
            operation = null;
        }
    } else {
        if (currentInput === '' && value === '-') {
            currentInput = '-';
            display.innerText = currentInput;
        } else {
            if (previousInput && operation) {
                currentInput = operate(previousInput, currentInput, operation).toString();
                display.innerText = currentInput;
            }
            operation = value;
            previousInput = currentInput;
            currentInput = '';
        }
    }
}

function operate(num1, num2, operation) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            return num2;
    }
}
