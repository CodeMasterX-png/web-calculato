let display = document.getElementById('result');

function appendNumber(number) {
    if (display.value === '0') {
        display.value = number;
    } else {
    display.value += number;
}
}

function appendOperator(operator) {
    display.value += operator;
}


function clearDisplay() {
    display.value = '0';
}

function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
       display.value = '0';
    }
}


function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
Use code with caution.
