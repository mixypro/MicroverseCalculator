//Add two numbers
function add (a, b) {
	return a+b;
}

//Substract two numbers
function subtract (a, b) {
	return a-b;
}

//Multiply two numbers
function multiply(a, b){
    return a*b;
}

//Divide two numbers
function divide(a, b) {
    return a/b;
}

//Define variables for values
var br1;
var br2;
var operand;
var lastNum;
var check;
var res;
var disp = document.getElementById("textAreaId");
var lastRes = document.getElementById("lastRes");
var dotButton = document.getElementById("dot");
window.addEventListener('keydown', keyListener);

//Key listener for keyboard support
function keyListener(e) {
	if (e.type = 'click') {
		e.keyCode = parseInt(e.target.getAttribute("data-key"));
	}
	switch(e.keyCode) {
		case 0:
			clear();
			break;
		case 8:
			buttonDel();
			break;
		case 111:
			buttonDivide();
			break;
		case 106:
			buttonMul();
			break;
		case 109:
			buttonMinus();
			break;
		case 107:
			buttonAdd();
			break;
		case 13:
		case 187:
            equals();
			break;
		case 48:
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56:
		case 57:
			let str = String.fromCharCode(e.keyCode);
			disp.textContent += str;
			break;
		case 190:
		case 110:
			buttonDot();
			break;
	}
}


//Print number on dsiplay
function printToDisplay(num){
    disp.textContent = disp.textContent + num;
    lastNum = num;
}

//Hide dot after use
function hideDot(){
    dotButton.style.visibility='hidden';

}

//Button for add
function buttonPlus(){
    br1 = parseFloat(disp.textContent);
    operand = '+';
    disp.textContent = '';
    dotButton.style.visibility = 'visible';
}

//Button for sub
function buttonMinus(){
    br1 = parseFloat(disp.textContent);
    operand = '-';
    disp.textContent = '';
    dotButton.style.visibility = 'visible';
}

//Button for mul
function buttonMul(){
    br1 = parseFloat(disp.textContent);
    operand = '*';
    disp.textContent = '';
    dotButton.style.visibility = 'visible';
}

//Button for divide
function buttonDivide(){
    br1 = parseFloat(disp.textContent);
    operand = '/';
    disp.textContent = '';
    dotButton.style.visibility = 'visible';
    if (br1 == 0) {
        disp.textContent = error() + 'Auto reset after 3 sec.';
        setTimeout(
            function() {
              buttonC();
            }, 3000);
    }
}

//Button for clear
function buttonC(){
    br1 = undefined;
    br2 = undefined;
    operand = undefined;
    disp.textContent = '';
    dotButton.style.visibility = 'visible';
}


//Button for remove last char;
function buttonDel(){
    var test = disp.textContent;
    var foo = test.substring(0, test.length - 1);
    disp.textContent = foo;
}

//Error function
function error(){
    return "Error!";
}

//Equals function
function equals() {
    lastRes.textContent = res;
    br2 = parseFloat(disp.textContent);
    disp.textContent = '';
    let test  = parseFloat(operate(operand, br1, br2));
    if (test%1!=0){
        disp.textContent = parseFloat(operate(operand, br1, br2)).toFixed(2);
    } else {
        disp.textContent = parseFloat(operate(operand, br1, br2));
    }
    res = parseFloat(disp.textContent);
    dotButton.style.visibility = 'visible';
}


//Operate function
function operate(operator, num1, num2){
    if (operator == '+')
    return add(num1, num2)
    else if (operator == '-')
    return subtract(num1, num2)
    else if (operator == '*')
    return multiply(num1, num2)
    else if (operator=='/')
    return divide(num1, num2)
}