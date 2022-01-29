
const calculatorDiv = document.querySelector(".calculator");
const screen_span = document.getElementById("screen");


const digitOne_div = document.getElementById("digitOne");
const digitTwo_div = document.getElementById("digitTwo");
const digitThree_div = document.getElementById("digitThree");
const digitFour_div = document.getElementById("digitFour");
const digitFive_div = document.getElementById("digitFive");
const digitSix_div = document.getElementById("digitSix");
const digitSeven_div = document.getElementById("digitSeven");
const digitEight_div = document.getElementById("digitEight");
const digitNine_div = document.getElementById("digitNine");
const digitZero_div = document.getElementById("digitZero");

const addition_div = document.getElementById("addition");
const subtraction_div = document.getElementById("subtraction");
const multiplication_div = document.getElementById("multiplication");
const division_div = document.getElementById("division");
const equals_div = document.getElementById("equals");

let operator;
let firstNumber;
let secondNumber;

function operate(firstNumber, operator, secondNumber){

    if (operator == '+'){
        add(firstNumber, secondNumber);

    }else if (operator == '-'){
        subtract(firstNumber, secondNumber);

    }else if (operator == '*'){
        multiply(firstNumber, secondNumber);

    }else if (operator == '/'){
        divide(firstNumber, secondNumber);
    }
}

function add(firstNumber, secondNumber) {
    result = firstNumber + secondNumber;
    return result;
}

function subtract(firstNumber, secondNumber) {
    result = firstNumber - secondNumber;
    return result;
}

function multiply(firstNumber, secondNumber) {
    result = firstNumber * secondNumber;
    return result;
}

function divide(firstNumber, secondNumber) {
    result = firstNumber / secondNumber;
    return result;
}

function equationBuilder(tempArr){
    let operatorList = ['+', '-', '*', '/']
    console.log(tempArr)

    for (let i = 0; i < operatorList; i++){
        let operatorInd = tempArr.indexOf(operatorList[i])
    }

    let firstNumber = tempArr.slice(0, operatorInd - 1)
    let operator = tempArr[operatorInd]
    let secondNumber = tempArr.slice(operatorInd + 1)

    console.log(firstNumber)
    console.log(operator)
    console.log(secondNumber)
}

function userInput(){
    let tempArr = [];

    digitOne_div.addEventListener('click', function(){
        console.log("1");
        tempArr.push(1);
    })

    digitTwo_div.addEventListener('click', function(){
        console.log("2");
        tempArr.push(2);
    })

    digitThree_div.addEventListener('click', function(){
        console.log("3");
        tempArr.push(3);
    })

    digitFour_div.addEventListener('click', function(){
        console.log("4");
        tempArr.push(4);
    })

    digitFive_div.addEventListener('click', function(){
        console.log("5");
        tempArr.push(5);
    })

    digitSix_div.addEventListener('click', function(){
        console.log("6");
        tempArr.push(6);
    })

    digitSeven_div.addEventListener('click', function(){
        console.log("7");
        tempArr.push(7);
    })

    digitEight_div.addEventListener('click', function(){
        console.log("8");
        tempArr.push(8);
    })

    digitNine_div.addEventListener('click', function(){
        console.log("9");
        tempArr.push(9);
    })

    digitZero_div.addEventListener('click', function(){
        console.log("0");
        tempArr.push(0);
    })

    addition_div.addEventListener('click', function(){
        console.log("+");
        tempArr.push('+');
    })

    subtraction_div.addEventListener('click', function(){
        console.log("-");
        tempArr.push("-");
    })

    multiplication_div.addEventListener('click', function(){
        console.log("*");
        tempArr.push("*");
    })

    division_div.addEventListener('click', function(){
        console.log("/");
        tempArr.push("/");
    })

    equals_div.addEventListener('click', function(){
        console.log("=");
        equationBuilder(tempArr);
    })
}

userInput();