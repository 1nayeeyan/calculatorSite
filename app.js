
const calculatorDiv = document.querySelector(".calculator");
const screen_span = document.getElementById("screen");
const clear_span = document.getElementById("clear");

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
const operatorList = ['+', '-', '*', '/']

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
    result = result.toPrecision(2)
    screen_span.innerHTML = result
    return result;
}

function subtract(firstNumber, secondNumber) {
    result = firstNumber - secondNumber;
    result = result.toPrecision(2)
    screen_span.innerHTML = result
    return result;
}

function multiply(firstNumber, secondNumber) {
    result = firstNumber * secondNumber;
    result = result.toPrecision(2)
    screen_span.innerHTML = result
    return result;
}

function divide(firstNumber, secondNumber) {
    result = firstNumber / secondNumber;
    result = result.toPrecision(2)
    screen_span.innerHTML = result
    return result;
}

function equationBuilder(tempArr){
    console.log(tempArr)

    for (i = 0; i < operatorList.length; i++){

        if (tempArr.includes(operatorList[i])){
            operatorInd = tempArr.indexOf(operatorList[i])
        }
    }

    firstNumber = tempArr.slice(0, operatorInd)
    operator = tempArr[operatorInd]
    secondNumber = tempArr.slice(operatorInd + 1)
    tempArr = [];

    firstNumber = parseFloat(firstNumber.join(''))
    secondNumber = parseFloat(secondNumber.join(''))
    console.log(firstNumber)
    console.log(operator)
    console.log(secondNumber)

    operate(firstNumber, operator, secondNumber);
}

function userInput(){
    var tempArr = [];

    digitOne_div.addEventListener('click', function(){
        screen_span.innerHTML = 1
        console.log("1");
        tempArr.push(1);
    })

    digitTwo_div.addEventListener('click', function(){
        screen_span.innerHTML = 2
        console.log("2");
        tempArr.push(2);
    })

    digitThree_div.addEventListener('click', function(){
        screen_span.innerHTML = 3
        console.log("3");
        tempArr.push(3);
    })

    digitFour_div.addEventListener('click', function(){
        screen_span.innerHTML = 4
        console.log("4");
        tempArr.push(4);
    })

    digitFive_div.addEventListener('click', function(){
        screen_span.innerHTML = 5
        console.log("5");
        tempArr.push(5);
    })

    digitSix_div.addEventListener('click', function(){
        screen_span.innerHTML = 6
        console.log("6");
        tempArr.push(6);
    })

    digitSeven_div.addEventListener('click', function(){
        screen_span.innerHTML = 7
        console.log("7");
        tempArr.push(7);
    })

    digitEight_div.addEventListener('click', function(){
        screen_span.innerHTML = 8
        console.log("8");
        tempArr.push(8);
    })

    digitNine_div.addEventListener('click', function(){
        screen_span.innerHTML = 9
        console.log("9");
        tempArr.push(9);
    })

    digitZero_div.addEventListener('click', function(){
        screen_span.innerHTML = 0
        console.log("0");
        tempArr.push(0);
    })

    addition_div.addEventListener('click', function(){

        for (i = 0; i < operatorList.length; i++){
            if (tempArr.includes(operatorList[i])){
                
                transArr = tempArr
                tempArr = [];
                equationBuilder(transArr);
                tempArr.unshift(result)
            }
        }


        screen_span.innerHTML = '+'
        console.log("+");
        tempArr.push('+');
    })

    subtraction_div.addEventListener('click', function(){

        for (i = 0; i < operatorList.length; i++){
            if (tempArr.includes(operatorList[i])){
                
                transArr = tempArr
                tempArr = [];
                equationBuilder(transArr);
                tempArr.unshift(result)
            }
        }


        screen_span.innerHTML = '-'
        console.log("-");
        tempArr.push("-");
    })

    multiplication_div.addEventListener('click', function(){

        for (i = 0; i < operatorList.length; i++){
            if (tempArr.includes(operatorList[i])){
                
                transArr = tempArr
                tempArr = [];
                equationBuilder(transArr);
                tempArr.unshift(result)
            }
        }


        screen_span.innerHTML = '*'
        console.log("*");
        tempArr.push("*");
    })

    division_div.addEventListener('click', function(){

        for (i = 0; i < operatorList.length; i++){
            if (tempArr.includes(operatorList[i])){
                
                transArr = tempArr
                tempArr = [];
                equationBuilder(transArr);
                tempArr.unshift(result)
            }
        }


        screen_span.innerHTML = '/'
        console.log("/");
        tempArr.push("/");
    })

    equals_div.addEventListener('click', function(){
        console.log("=");
        transArr = tempArr
        tempArr = [];
        equationBuilder(transArr);
        
    })

    clear_span.addEventListener('click', function(){
        screen_span.innerHTML = 0
        console.log("clear");
        tempArr = [];
    })
}

userInput();