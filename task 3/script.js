const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.id === 'clear') {
            currentInput = '';
            operator = '';
            previousInput = '';
            display.textContent = '0';
        } else if (button.id === 'delete') {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
        } else if (button.id === 'equals') {
            if (currentInput && previousInput && operator) {
                currentInput = calculate(previousInput, currentInput, operator);
                display.textContent = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (['add', 'subtract', 'multiply', 'divide'].includes(button.id)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function calculate(a, b, operator) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    if (isNaN(num1) || isNaN(num2)) return '';

    switch (operator) {
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case '*':
            return (num1 * num2).toString();
        case '/':
            return (num1 / num2).toString();
        default:
            return '';
    }
}
