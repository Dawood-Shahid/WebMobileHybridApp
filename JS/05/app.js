//task1 & 2
var num1 = +prompt('\nTask 1:\n\nEnter 1st number:');
var num2 =  +prompt('\nTask 1:\n\nEnter 2nd number:');
var res = num1 + num2;
document.write("<p><br><br><br><br>Task 1:</p><br><p>Sum of " + num1 + " and " + num2 + " is " + res + "</p>");
var res = num1 - num2;
document.write("<p><br><br>Task 2:</p><br><p>Subtraction of " + num1 + " and " + num2 + " is " + res + "</p>");
var res = num1 * num2;
document.write("<p><br><br>Task 2:</p><br><p>Product of " + num1 + " and " + num2 + " is " + res + "</p>");
var res = num1 / num2;
document.write("<p><br><br>Task 2:</p><br><p>Division of " + num1 + " and " + num2 + " is " + res + "</p>");
var res = num1 % num2;
document.write("<p><br><br>Task 2:</p><br><p>Remander of " + num1 + " and " + num2 + " is " + res + "</p>");

//task3
var num;    
document.write("<p><br><br><br><br>Task 3:</p><br><p>Value after variable declaration is: " + num + "</p>");
num = 6;
document.write("<p><br><br>Task 3:<br><br>Initial value: " + num + "</p>");
num++;
document.write("<p><br><br>Task 3:<br><br>Value after increment is: " + num + "</p>");
num = num + 7;
document.write("<p><br><br>Task 3:<br><br>Value after addition of 7 is: " + num + "</p>");
num--;
document.write("<p><br><br>Task 3:<br><br>Value after decrement is: " + num + "</p>");
num = num % 3;
document.write("<p><br><br>Task 3:<br><br>After divide by 3 the remainder is: " + num + "</p>");

//task4
var pricePerTicket = 600;
var totalPrice = pricePerTicket * 5;
document.write("<p><br><br><br><br>Task 4:<br><br>Total cost to buy 5 tickets to a movi is " + totalPrice + " PKR</p>");

//task5
var table = 4;
document.write("<p><br><br><br><br>Task 5:<br><br>Table of " + table + "</p>");
document.write("<br>" + table + " X 1 = " + table * 1);
document.write("<br>" + table + " X 2 = " + table * 2);
document.write("<br>" + table + " X 3 = " + table * 3);
document.write("<br>" + table + " X 4 = " + table * 4);
document.write("<br>" + table + " X 5 = " + table * 5);
document.write("<br>" + table + " X 6 = " + table * 6);
document.write("<br>" + table + " X 7 = " + table * 7);
document.write("<br>" + table + " X 8 = " + table * 8);
document.write("<br>" + table + " X 9 = " + table * 9);
document.write("<br>" + table + " X 10 = " + table * 10);

//task6
var cels = 25;
var fahr = 70;
var celsToFahe = (cels * 9 / 5) + 32;
var fahrToCels = (fahr - 32) * 5 / 9;
document.write("<p><br><br><br><br>Task 6:<br><br>The Temperature Converte</p>");
document.write("<p>Celsius into Fahrenheit: " + cels + "C is " + celsToFahe +"F</p>");
document.write("<p>Fahrenheit into Celsius: " + fahr + "F is " + fahrToCels +"C</p><br><br>");