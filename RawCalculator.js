

// const button1 = document.querySelector('#one');
// const button2 = document.querySelector('#two');
// const button3 = document.querySelector('#three');
// const button4 = document.querySelector('#four');
// const button5 = document.querySelector('#five');
// const button6 = document.querySelector('#six');
// const button7 = document.querySelector('#seven');
// const button8 = document.querySelector('#eight');
// const button9 = document.querySelector('#nine');
// const buttonMinus = document.querySelector('#minus');
// const buttonPlus = document.querySelector('#plus');
// const buttonPer = document.querySelector('#per');
// const buttonDivide = document.querySelector('#divide');
// const buttonEqual = document.querySelector('#equal');
// const buttonClear = document.querySelector('#clear');

const buttonAll = document.querySelectorAll('.mainContainer');
const buttonNum = document.querySelectorAll('.number');
const buttonCalc = document.querySelectorAll('.operator');
const buttonEqual = document.querySelector('.equal');
const buttonClear = document.querySelector('.clear');

const banner = document.querySelector('#banner');
currentOperation = ""
previousOperation = ''
operator = ''
let result = previousOperation + ' ' + operator + ' ' + currentOperation
let bannerContent = document.createTextNode(result);
banner.appendChild(bannerContent);
buttonNum.forEach(function(button) {
    button.addEventListener('click', function(event) {
        let numeroCliccato = event.target.textContent;
    currentOperation += numeroCliccato; 
    console.log(currentOperation)
    result = previousOperation + ' ' + operator + ' ' + currentOperation
bannerContent.textContent = result;
    });
});

buttonCalc.forEach(function(button) {
    button.addEventListener('click', function(event) {
    operator = event.target.textContent;
    previousOperation = currentOperation;
    currentOperation = ''
    result = previousOperation + ' ' + operator + ' ' + currentOperation
    bannerContent.textContent = result;
    if (result === ' / '|| result === ' * ') {
        result = "You want to trick the tricker? Find a job lil nigga (I'm black nw)";
        bannerContent.textContent = result
        result = ''
    }
    });
});


buttonClear.addEventListener('click', function() {
previousOperation = '';
currentOperation = '';
numeroCliccato = '';
operator = '';
result = previousOperation + ' ' + operator + ' ' + currentOperation
bannerContent.textContent = result;
})

buttonEqual.addEventListener('click', function(){
previousOperation = Number(previousOperation);
currentOperation = Number(currentOperation);
if (operator === '+') {
    result = previousOperation + currentOperation;
}
else if (operator === '-') {
    result = previousOperation - currentOperation;
}
else if (operator === '*') {
    result = previousOperation * currentOperation;
} else if (operator === '/') {
    result = previousOperation / currentOperation
}
result = previousOperation + ' ' + operator + ' ' + currentOperation + ' = ' + result
bannerContent.textContent = result;
previousOperation = '';
currentOperation = '';
numeroCliccato = '';
operator = '';
})

