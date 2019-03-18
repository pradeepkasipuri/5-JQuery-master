// Get the HTML Elements
let firstNumberElement = $('#firstNumber');
let secondNumberElement = $('#secondNumber');
let operatorButton = $('#operator');
let equalsButton = $('#equals-button');
let resultButton  = $('#result-button');
let plusButton  = $('#plus-button');
let minusButton  = $('#minus-button');
let divideButton  = $('#divide-button');
let multiplyButton  = $('#multiply-button');
let clearButton  = $('#clear-button');

minusButton.click(function() {
    operatorButton.text($(this).text());
});

plusButton.click(function() {
    operatorButton.text($(this).text());
});

divideButton.click(function() {
    operatorButton.text($(this).text());
});

multiplyButton.click(function() {
    operatorButton.text($(this).text());
});

equalsButton.click(function() {
    let firstNumber = firstNumberElement.val();
    let secondNumber = secondNumberElement.val();
    let operator = operatorButton.text();
    let result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        switch(operator){
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            default:
                result = 0;
                break;
        }
        resultButton.text(result);
    }
});

clearButton.click(function() {
    firstNumberElement.val('');
    secondNumberElement.val('');
    operatorButton.text('+');
    resultButton.text('RESULT');
});