//task4
var dice = Math.ceil(Math.random() * 6);

document.write("<br><br><br><br>Task 4<br><br>");
document.write("Random dice value: " + dice);

//task5
var coin = Math.ceil(Math.random() * 2);

if (coin === 1) {
    document.write("<br><br><br><br>Task 5<br><br>");
    document.write("Random coin value: Heads");
}
else {
    document.write("<br><br><br><br>Task 5<br><br>");
    document.write("Random coin value: Tails");
}

//task6
var number = Math.ceil(Math.random() * 100);

document.write("<br><br><br><br>Task 6<br><br>");
document.write("Random number between 1 and 100: " + number);

//task8
var number = Math.ceil(Math.random() * 10);
var userInput = +prompt("\nTask 8:\n\nEnter number between 1 to 10:");

if ( number === userInput) {
    alert("\nTask 8:\n\nCongratulation");
}
else {
    alert("\nTask 8:\n\nTry again");
}
