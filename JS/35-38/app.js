//task4
var num1 = + prompt("\nTask 4: Calculator\n\nEnter number 1:");
var opr = prompt("\nTask 4: Calculator\n\nEnter an operator:");
var num2 = + prompt("\nTask 4: Calculator\n\nEnter number 2:");

function calculator(num1, opr, num2) {
    if (opr === "+") {
        return (num1 + num2);
    }
    else if (opr === "-") {
        return (num1 - num2);
    }
    else if (opr === "*") {
        return (num1 * num2);
    }
    else if (opr === "/") {
        return (num1 / num2);
    }
}

var res = calculator(num1, opr, num2);

document.write("<br><br><br><br>Task 4<br><br>");
document.write("Calculator<br>");
document.write( num1 + " " + opr + " " + num2 + " = " + res);

//task5
var userInput = + prompt("\nTask 4:\n\nEnter a number:");

function square(userInput) {
    return userInput * userInput;
}

var res = square(userInput);

document.write("<br><br><br><br>Task 5<br><br>");
document.write("The square of " + userInput + " is " + res);

//task6
var userInput = + prompt("\nTask 6:\n\nEnter a number:");

function factorial(userInput) {
    var a = 1;
    for (i = userInput; i > 0; i--) {
        a = a * i;
    }
    return( a );
}

var res = factorial(userInput);

document.write("<br><br><br><br>Task 6<br><br>");
document.write("The factorial of " + userInput + " is " + res);