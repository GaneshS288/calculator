const mathExpression = document.querySelector('.math-expression');
const result = document.querySelector('.result');

const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const delBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.clear');
const decimalBtn = document.querySelector('.decimal');

numberBtns.forEach((button) => {
    button.addEventListener("click", assignNumValues)
});

operatorBtns.forEach((button) => {
    button.addEventListener("click", assignOperator)
})

decimalBtn.addEventListener("click", insertDecimal)

equalBtn.addEventListener("click", equalOperation)

function printExpression() {
    mathExpression.textContent = `${num1}${operator}${num2}`
}

function printResult() {
    result.textContent = operate(num1, operator, num2);
}

function assignNumValues(event) {
    let num = event.target.textContent;
    if (!operator.length && num1 == '0') {
        num1 = num
        printExpression()
    }

    else if (!operator.length && num1.includes('.') && num1.length < 7) {
        num1 += num;
        printExpression();
    }

    else if (!operator.length && num1.length < 6) {
        num1 += num
        printExpression();
    } 

    else if (operator.length && num2 == '0') {
        num2 = num
        printExpression()
    }

    else if (operator.length && num2.includes('.') && num2.length < 7) {
        num2 += num;
        printExpression();
    }

    else if (operator.length && num2.length < 6) {
        num2 += num
        printExpression();
    }
}

function assignOperator(event) {
    let opSign = event.target.textContent;

    if (num1.length && !num2.length) {
        operator = opSign
        printExpression();
    }

    else if (num1.length && num2.length) {
        equalOperation()
    }
}

function insertDecimal() {
    if (!operator.length && !num1.includes('.') && !num1.length) {
        num1 += '0.'
        printExpression();
    }

    else if (!operator.length && !num1.includes('.')) {
        num1 += '.'
        printExpression()
    }

    else if (operator.length && !num2.includes('.') && !num2.length) {
        num2 += '0.'
        printExpression()
    }
    
    else if (operator.length && !num2.includes('.')) {
        num2 += '.'
        printExpression()
    }
}

//evaluate the mathematical expression and print it. Then assign the result to num1 and reset operator and num2 variables

function equalOperation() {
    let num = operate(num1, operator, num2);
    
    if (typeof num === "number" && !isNaN(num) && num2.length) {
        printResult();
       
        num1 = num.toString();
        num2 = ''
        operator = ''

        printExpression()
    }
}

let num1 = '';
let num2 = '';
let operator = '';

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function operate(num1, operator, num2) {

    let result;

    switch (operator) {
        case "+":
            result = add(num1, num2);
        break;
        
        case "-":
            result = subtract(num1, num2);
        break;
        
        case "*":
            result = multiply(num1, num2);
        break;

        case "/":
            result = divide(num1, num2);
        break;

        default:
            return "error";        
    }
    return result = result.toFixed(3) * 10/10;
}

