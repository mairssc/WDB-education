const buttons = document.querySelectorAll('.buttons');
const lastButtons = document.querySelectorAll('#last-buttons');
const resultScreen = document.querySelector('.result-screen');
let allButtonsText = [];
let lastButtonsText = [];
let specButtonsText = ['C', '←'];
let numberButtonsText = allButtonsText;
let displayNumber = 0;
let firstNumber = 0;
let nextOpString = '';
let base = 10;

for (var i = 0; i < buttons.length; i++) {
    allButtonsText.push(buttons[i].innerHTML);
}

for (var i = 0; i < lastButtons.length; i++) {
    lastButtonsText.push(lastButtons[i].innerHTML);
}

numberButtonsText = numberButtonsText.filter(function(el) {
    return !lastButtonsText.includes(el);
});

numberButtonsText = numberButtonsText.filter(function(el) {
    return !specButtonsText.includes(el);
});

function nextOperation(a, b) {
    if (nextOpString === '+') {
        return a + b;
    } else if (nextOpString === '-') {
        return a - b;
    } else if (nextOpString === 'x') {
        return a * b;
    } else if (nextOpString === '÷') {
        return a / b;
    } 
    return b;
}


for (var i = 0; i < buttons.length; i++) {
    let curButton = buttons[i];
    let curKey = curButton.innerHTML;

    if (numberButtonsText.includes(curKey)) {
        curKey = parseInt(curKey);
        curButton.addEventListener("click", function() {
            displayNumber *= base;
            displayNumber += curKey;
            resultScreen.innerText = displayNumber.toString();
        })
    } else if (lastButtonsText.includes(curKey)) {
        if (curKey === '=') {
            curButton.addEventListener("click", function() {
                displayNumber = nextOperation(firstNumber, displayNumber);
                nextOpString = '';
                firstNumber = 0;
                resultScreen.innerText = displayNumber.toString();
            })
        } else {
            curButton.addEventListener("click", function() {
                firstNumber = nextOperation(firstNumber, displayNumber);
                nextOpString = curKey;
                displayNumber = 0;
                resultScreen.innerText = displayNumber.toString();
            })
        }
    } else if (specButtonsText.includes(curKey)) {
        if (curKey === 'C') {
            curButton.addEventListener("click", function() {
                displayNumber = 0;
                firstNumber = 0;
                nextOpString = '';
                resultScreen.innerText = displayNumber.toString();
            })
        } else if (curKey === '←') {
            curButton.addEventListener("click", function() {
                displayNumber = Math.floor(displayNumber/10);
                resultScreen.innerText = displayNumber.toString();
            })
        }
    }
}