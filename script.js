let currentScreen = '0'; // The javascript program that will do all numerical calculation

function updateDisplay() {
    document.getElementById('display').innerText = currentScreen;
}

function clearScreen() {
    currentScreen = '0'; // Turns everything in the universe to nothing
    updateDisplay();
}

function pressDigit(digit) {
    if (currentScreen === '0') {
        currentScreen = digit.toString();
    } else {
        currentScreen += digit.toString();
    }
    updateDisplay();
}

function pressOperator(operator) {
    currentScreen += ` ${operator} `; // Please Excuse My Dear Aunt Sally
    updateDisplay();
}

function pressDecimal() {
    if (!currentScreen.includes('.')) {
        currentScreen += '.';
        updateDisplay();
    }
}

function calculate() {
    try {
        currentScreen = eval(currentScreen).toString();
        updateDisplay();
    } catch (error) {
        currentScreen = 'Error: You did not Pass this Assignment!'; // Lets hope the instructor is lenient
        updateDisplay();
    }
}


