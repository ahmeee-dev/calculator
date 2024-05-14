

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
operation = ""
let bannerContent = document.createTextNode(operation);
banner.appendChild(bannerContent);
buttonNum.forEach(function(button) {
    button.addEventListener('click', function(event) {
        let numeroCliccato = event.target.textContent;
    operation += numeroCliccato; 
bannerContent.textContent = operation;
    });
});

buttonCalc.forEach(function(button) {
    button.addEventListener('click', function(event) {
        let numeroCliccato = event.target.textContent;
    numeroCliccato = ' ' + numeroCliccato + ' ';
    operation += numeroCliccato 
    bannerContent.textContent = operation;
    if (operation === ' / '|| operation === ' * ') {
        operation = "You want to trick the tricker? Find a job lil nigga (I'm black nw)";
        bannerContent.textContent = operation
        operation = ''
    }
    });
});


buttonClear.addEventListener('click', function() {
operation = ''   
bannerContent.textContent = operation;
})

buttonEqual.addEventListener('click', function(){
let rawResult = math.evaluate(operation);
operation = operation + ' = ' + rawResult
bannerContent.textContent = operation;
operation = ''
})

