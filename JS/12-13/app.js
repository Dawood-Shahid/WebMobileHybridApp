//task6

var greeting; 
var hour = 19;

if (hour < 18) { 
    greeting = "Good day";
}
else {
    greeting = "Good evening"; 
}

document.write("<p><br><br><br><br>Task 6:<br><br>" + greeting + "</p>");

//task7

var userInput = +prompt("Task 7:\n\nEnter a time in 24 hour Clock format (0000 to 2359)");
var message;

if(userInput >= 0000 && userInput < 1200){
    message = "Good morning.";
}
else if(userInput >= 1200 && userInput < 1700){
    message = "Good afternoon.";
}
else if(userInput >= 1700 && userInput < 2100){
    message = "Good evening.";
}
else if(userInput >= 2100 && userInput <= 2359){
    message = "Good night.";
}
else{
    message = "invalid time entered.";
}

alert("Task 7:\n\n" + message);